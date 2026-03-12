---
title: 'Capa de Caché Distribuida con Redis y Go'
description: 'Una capa de caché distribuida de alto rendimiento construida en Go, reduciendo la latencia p99 de la base de datos en un 94% en una flota de 200+ microservicios que manejan 50,000 req/s en picos de carga.'
publishDate: 2024-11-10
tags: [Go, Redis, Kubernetes, gRPC, Prometheus, Terraform]
featured: true
image:
  src: 'https://placehold.co/800x450/0f172a/79d5e2?text=Caché+Distribuida'
  alt: 'Diagrama de arquitectura de caché distribuida'
github: https://github.com/example/distributed-cache
demo: https://cache-demo.example.dev
language: es
id: distributed-cache
category: Distributed
---

## Resumen

Una capa de caché distribuida de nivel productivo diseñada para absorber picos de tráfico en una arquitectura de microservicios. El sistema maneja **más de 50,000 solicitudes por segundo** con una latencia p99 inferior a 2ms, reduciendo drásticamente la carga en los clusters PostgreSQL.

## Problema

La plataforma experimentaba fallos en cascada durante los picos de eventos. Cada lanzamiento de producto importante desencadenaba una tormenta de lecturas contra PostgreSQL, causando el agotamiento del pool de conexiones y tiempos de consulta de varios segundos para millones de usuarios.

## Resultados Clave

| Métrica                  | Antes   | Después |
| ------------------------ | ------- | ------- |
| Tiempo de consulta p99   | 1,240ms | 72ms    |
| Conexiones DB en pico    | 4,200   | 310     |
| Tasa de acierto de caché | —       | 97.3%   |
| Costo mensual DB         | $18,400 | $5,100  |
