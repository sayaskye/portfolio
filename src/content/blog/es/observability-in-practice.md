---
title: 'Observabilidad en Práctica: Más Allá del Logging'
description: 'Cómo construir una stack de observabilidad real usando los tres pilares — métricas, trazas y logs — y por qué la mayoría de los equipos lo están haciendo mal al tratarlos como preocupaciones separadas.'
publishDate: 2024-04-22
tags: [Observabilidad, OpenTelemetry, Prometheus, Grafana, Arquitectura]
featured: false
image:
  src: 'https://placehold.co/800x450/0f172a/79d5e2?text=Observabilidad'
  alt: 'Dashboard de observabilidad con métricas y trazas'
language: es
id: observability-in-practice
---

## Los Tres Pilares No Son Suficientes

Todo el mundo conoce los tres pilares: **métricas, trazas, logs**. Pero la mayoría de los equipos los implementan de forma aislada y se preguntan por qué los incidentes siguen tardando 45 minutos en diagnosticarse.

La clave: **un pilar solo es inútil. El valor viene de la correlación.**

## Implementando Propagación de Contexto

La base es la **propagación de contexto de traza**. Cada solicitud debe llevar un trace ID, y cada componente debe extraerlo y reenviarlo.

## Alertas Basadas en SLO

La mayoría de los equipos alertan sobre síntomas ("CPU > 80%"). En cambio, alerta sobre **impacto en el usuario**: define un SLO y alerta sobre la **tasa de quema** del presupuesto de error.

## Conclusión

La observabilidad real no es un conjunto de herramientas — es una disciplina de instrumentación, correlación y pensamiento en SLOs integrada en cada servicio desde el primer día.
