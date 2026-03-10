---
title: "Observability in Practice: Beyond Logging"
description: "How to build a true observability stack using the three pillars — metrics, traces, and logs — and why most teams are doing it wrong by treating them as separate concerns instead of a unified system."
publishDate: 2024-04-22
tags: [Observability, OpenTelemetry, Prometheus, Grafana, Architecture]
featured: false
image:
  src: 'https://placehold.co/800x450/0f172a/79d5e2?text=Observability'
  alt: 'Observability dashboard with metrics and traces'
language: en
id: observability-in-practice
---

## The Three Pillars Are Not Enough

Everyone knows the three pillars: **metrics, traces, logs**. But most teams implement them in isolation — a Prometheus stack here, some ELK logs there, Jaeger tracing as an afterthought — and wonder why incidents still take 45 minutes to diagnose.

The key insight: **a pillar alone is useless. Value comes from correlation.**

When an alert fires on p99 latency, you need to go from:
1. **Metric**: p99 latency spike at 14:23:07
2. **Trace**: Which trace IDs were affected during that window?
3. **Log**: What error messages appear in those trace spans?

Without correlation, you're running three separate investigations. With it, you're running one.

## Implementing Context Propagation

The foundation is **trace context propagation**. Every request must carry a trace ID, and every component (HTTP handlers, gRPC calls, DB queries, message consumers) must extract and forward it.

Using OpenTelemetry in Go:

```go
func NewHTTPClient(tp trace.TracerProvider) *http.Client {
    return &http.Client{
        Transport: otelhttp.NewTransport(
            http.DefaultTransport,
            otelhttp.WithTracerProvider(tp),
            otelhttp.WithPropagators(otel.GetTextMapPropagator()),
        ),
    }
}

// Every outbound HTTP call now automatically:
// 1. Creates a child span
// 2. Injects W3C Trace Context headers
// 3. Records HTTP status, duration, and errors as span attributes
```

## Structured Logging with Trace Correlation

Log lines without a trace ID are nearly useless at scale. Structured logging with automatic trace injection:

```go
func LoggerFromContext(ctx context.Context) *slog.Logger {
    span := trace.SpanFromContext(ctx)
    return slog.Default().With(
        "trace_id", span.SpanContext().TraceID().String(),
        "span_id",  span.SpanContext().SpanID().String(),
    )
}
```

Now every log line is linkable to its trace. In Grafana, you can click a spike on a metric, jump to the exemplar trace, and drill into the correlated log lines — all in under 30 seconds.

## SLO-Driven Alerting

Most teams alert on symptoms ("CPU > 80%"). Alert on **user impact** instead.

Define an SLO:
```yaml
# 99.5% of requests complete in under 500ms, measured over a 28-day rolling window
name: payments-api-latency
target: 0.995
indicator:
  latency:
    threshold: 500ms
    goodOnlyIf: status < 500
```

Then alert on **burn rate** — how fast you're consuming your error budget — not raw thresholds. A 14x burn rate for 5 minutes warrants a page. A 2x burn rate for 1 hour warrants a ticket. This eliminates most alert fatigue while catching real incidents faster.

## Conclusion

True observability is not a set of tools — it's a discipline of instrumentation, correlation, and SLO thinking baked into every service from day one. The investment in OpenTelemetry propagation upfront pays dividends every time an incident hits production.
