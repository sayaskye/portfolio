---
title: 'Designing for Sub-Millisecond Latency in Distributed Systems'
description: 'A deep dive into the architectural patterns, hardware considerations, and software optimizations that enable distributed systems to achieve consistent sub-millisecond p99 latencies at scale.'
publishDate: 2024-10-05
tags: [Distributed Systems, Architecture, Performance, Networking]
featured: true
image:
  src: 'https://placehold.co/800x450/0f172a/79d5e2?text=Low+Latency'
  alt: 'Abstract network latency visualization'
language: en
id: sub-ms-latency
category: Distributed
---

## The Latency Problem is Not a Single Problem

When a team says "we need lower latency," they're usually describing three completely different problems conflated into one:

1. **Tail latency** — the p99/p999 outliers that destroy SLAs
2. **Absolute latency** — the median is too high by design
3. **Latency variance** — the median is fine but the jitter is unpredictable

Each problem has different root causes and different solutions. Most engineers optimize for case 2 when their users are actually suffering from case 1.

## The Four Latency Killers

### 1. Garbage Collection Pauses (JVM / Go)

The most common source of tail latency spikes in managed-runtime services. A GC pause in a Go service handling 10,000 concurrent requests causes all of them to stall simultaneously.

**Mitigation strategies:**

- Tune GC pressure by reducing allocation rate (pool objects, avoid escape analysis failures)
- Use GOGC/GOMEMLIMIT tuning in Go
- Consider off-heap storage (e.g., RocksDB) for large datasets

### 2. Lock Contention

Shared mutable state protected by mutexes creates serialization points that eliminate concurrency benefits.

```go
// ❌ Naive approach — single lock destroys concurrency
type BadCache struct {
    mu   sync.Mutex
    data map[string][]byte
}

// ✅ Sharded approach — 256x less contention
type ShardedCache struct {
    shards [256]struct {
        mu   sync.RWMutex
        data map[string][]byte
    }
}

func (c *ShardedCache) shard(key string) *struct {
    mu   sync.RWMutex
    data map[string][]byte
} {
    h := fnv.New32a()
    h.Write([]byte(key))
    return &c.shards[h.Sum32()%256]
}
```

### 3. Network Round Trips

Each cross-service call adds at minimum 0.5ms within the same datacenter AZ. Systems that chain 10+ synchronous calls cannot achieve sub-2ms p99 latencies by definition.

**Design patterns that help:**

- **Request collapsing**: batch multiple calls into one
- **Prefetching**: use async background workers to pre-warm caches
- **Co-location**: run latency-sensitive services in the same process

### 4. Context Switches & Scheduling

At high concurrency, the OS scheduler becomes a bottleneck. A thread waiting on I/O wakes up, but may not get CPU time for milliseconds due to scheduling jitter.

**Solutions:**

- Reduce thread count by using async I/O (Go goroutines, Tokio in Rust)
- Pin latency-critical threads to dedicated CPU cores (CPU affinity)
- Use polling mode drivers (DPDK) for network I/O in extreme cases

## Measuring What Matters

> "You cannot optimize what you cannot measure."

Use **HDR Histograms**, not averages. Average latency hides tail behavior completely. A system with p50=1ms and p99=5,000ms has an "average" of roughly 51ms — a meaningless number.

## Conclusion

Sub-millisecond p99 is achievable in software for most use cases, but it requires holistic thinking across the runtime, the concurrency model, the data structures, and the network topology. There is no single silver bullet — only the disciplined elimination of each latency source through measurement and targeted optimization.
