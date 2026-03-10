---
title: "Pipeline de Streaming de Eventos en Tiempo Real"
description: "Un pipeline de streaming de eventos tolerante a fallos que procesa 12 millones de eventos por día usando Apache Kafka y Apache Flink, impulsando dashboards de analítica en tiempo real y sistemas de detección de fraude."
publishDate: 2024-02-28
tags: [Apache Kafka, Apache Flink, Java, AWS, PostgreSQL, Grafana]
featured: false
image:
  src: 'https://placehold.co/800x450/0f172a/79d5e2?text=Pipeline+Eventos'
  alt: 'Arquitectura del pipeline de streaming de eventos en tiempo real'
github: https://github.com/example/stream-pipeline
language: es
id: stream-pipeline
---

## Resumen

Un pipeline de procesamiento de streams con estado que ingiere, enriquece, agrega y entrega más de 12 millones de eventos por día con una latencia de extremo a extremo inferior a 300ms. Impulsa el motor de detección de fraude en tiempo real y los dashboards de analítica de negocio.

## Rendimiento

- **Throughput**: 140 eventos/segundo promedio, 4,200/segundo en pico
- **Latencia de extremo a extremo**: p50 85ms, p99 280ms
- **Precisión en detección de fraude**: 99.2% (vs 87% en baseline por lotes)
