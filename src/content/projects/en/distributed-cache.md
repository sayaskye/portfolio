---
title: 'Distributed Cache Layer with Redis & Go'
description: 'A high-throughput distributed caching layer built in Go, reducing p99 database latency by 94% across a fleet of 200+ microservices handling 50,000 req/s at peak load.'
publishDate: 2024-11-10
tags: [Go, Redis, Kubernetes, gRPC, Prometheus, Terraform]
featured: true
image:
  src: 'https://placehold.co/800x450/0f172a/79d5e2?text=Distributed+Cache'
  alt: 'Distributed cache architecture diagram'
github: https://github.com/example/distributed-cache
demo: https://cache-demo.example.dev
language: en
id: distributed-cache
category: architecture
---

## Overview

A production-grade distributed caching layer designed to absorb traffic spikes across a microservices architecture. The system handles **50,000+ requests per second** with a p99 latency of under 2ms, dramatically reducing the load on downstream PostgreSQL clusters.

## Problem Statement

Our platform was experiencing cascading failures during peak events. Every major product launch would trigger a read storm against PostgreSQL, causing connection pool exhaustion and multi-second query times for millions of users.

## Architecture

The solution is a **write-through, read-aside cache** implemented in Go, backed by a Redis Cluster with 6 shards, deployed on Kubernetes with auto-scaling policies tuned to p95 latency.

```go
// Cache client with circuit breaker pattern
type CacheClient struct {
    redis   *redis.ClusterClient
    breaker *gobreaker.CircuitBreaker
    metrics *prometheus.Registry
}

func (c *CacheClient) Get(ctx context.Context, key string) ([]byte, error) {
    result, err := c.breaker.Execute(func() (interface{}, error) {
        val, err := c.redis.Get(ctx, key).Bytes()
        if err == redis.Nil {
            return nil, ErrCacheMiss
        }
        return val, err
    })
    if err != nil {
        c.metrics.cacheMiss.Inc()
        return nil, err
    }
    c.metrics.cacheHit.Inc()
    return result.([]byte), nil
}
```

## Key Results

| Metric                 | Before  | After  |
| ---------------------- | ------- | ------ |
| p99 DB Query Time      | 1,240ms | 72ms   |
| DB Connections at Peak | 4,200   | 310    |
| Cache Hit Rate         | —       | 97.3%  |
| Monthly DB Cost        | $18,400 | $5,100 |

## Observability

Every cache operation emits structured logs and Prometheus metrics, feeding into a Grafana dashboard with SLO alerting. The circuit breaker state is exposed as a metric, allowing automatic rollback in runbooks.
