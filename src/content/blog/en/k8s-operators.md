---
title: 'Kubernetes Operators: Extending the Control Plane for Fun and Production'
description: 'A practical guide to building production-grade Kubernetes Operators using the controller-runtime framework — from reconciliation loops and informers to leader election and safe upgrades.'
publishDate: 2024-07-18
tags: [Kubernetes, Go, Platform Engineering, DevOps]
featured: false
image:
  src: 'https://placehold.co/800x450/0f172a/3865a1?text=K8s+Operators'
  alt: 'Kubernetes operator control loop diagram'
language: en
id: k8s-operators
category: architecture
---

## Why Write an Operator?

A Kubernetes Operator encodes operational knowledge into software. Instead of a runbook that says "when service X crashes, run these 5 kubectl commands," an operator watches for that state and runs those commands automatically.

The canonical use cases:

- Stateful applications that need ordered lifecycle management (databases, Kafka)
- Multi-resource workflows where creating one resource should trigger others
- Automated day-2 operations (backup, scaling policies, rotation)

## The Reconciliation Loop

Every operator is built around a single concept: the **reconciliation loop**. At its core:

```
Observe desired state (from YAML) → Observe actual state (from API) → Take action to close the gap → Repeat
```

In code using `controller-runtime`:

```go
func (r *MyServiceReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
    log := log.FromContext(ctx)

    // 1. Fetch the custom resource
    var ms myv1.MyService
    if err := r.Get(ctx, req.NamespacedName, &ms); err != nil {
        return ctrl.Result{}, client.IgnoreNotFound(err)
    }

    // 2. Check if Deployment exists
    var deploy appsv1.Deployment
    err := r.Get(ctx, types.NamespacedName{Name: ms.Name, Namespace: ms.Namespace}, &deploy)
    if errors.IsNotFound(err) {
        // 3. Create it if not
        deploy = r.buildDeployment(&ms)
        if err := r.Create(ctx, &deploy); err != nil {
            return ctrl.Result{}, err
        }
        log.Info("Created Deployment", "name", ms.Name)
        return ctrl.Result{}, nil
    }

    // 4. Update if spec changed
    if deploy.Spec.Replicas != ms.Spec.Replicas {
        deploy.Spec.Replicas = ms.Spec.Replicas
        return ctrl.Result{}, r.Update(ctx, &deploy)
    }

    return ctrl.Result{}, nil
}
```

## Idempotency is Non-Negotiable

Your reconciler **will be called multiple times** for the same event. Network blips, restarts, and leader elections all trigger re-reconciliation. Every action you take must be safe to repeat:

- Use `CreateOrUpdate` instead of `Create` alone
- Check current state before making changes
- Use `Status` subresource for reporting state (never use spec fields for status)

## Testing Strategy

The `envtest` package runs a real API server and etcd binary locally, giving your tests a real Kubernetes environment without a cluster.

```go
var _ = Describe("MyService controller", func() {
    It("Should create a Deployment when a MyService is created", func() {
        ms := &myv1.MyService{
            ObjectMeta: metav1.ObjectMeta{Name: "test-svc", Namespace: "default"},
            Spec:       myv1.MyServiceSpec{Replicas: ptr.Int32(3)},
        }
        Expect(k8sClient.Create(ctx, ms)).Should(Succeed())

        Eventually(func() bool {
            var deploy appsv1.Deployment
            err := k8sClient.Get(ctx, types.NamespacedName{Name: "test-svc", Namespace: "default"}, &deploy)
            return err == nil && *deploy.Spec.Replicas == 3
        }, timeout, interval).Should(BeTrue())
    })
})
```

## Conclusion

Operators are the right abstraction for encoding operational complexity at scale. The learning curve is real, but the payoff — turning 3-day runbooks into 3-second automation — is worth every line of reconciler code.
