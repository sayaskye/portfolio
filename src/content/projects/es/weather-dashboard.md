---
title: Panel de Clima
description: Un panel de clima interactivo con pronósticos en tiempo real, visualización de datos históricos y alertas basadas en ubicación.
publishDate: 2023-11-20
tags: [Vue.js, D3.js, OpenWeather API, PWA]
featured: false
image:
  src: /images/projects/weather-dashboard.jpg
  alt: Panel de clima mostrando condiciones actuales y pronóstico de 7 días
github: https://github.com/example/weather-dashboard
demo: https://weather-dashboard-demo.netlify.app
language: es
---

## Descripción del Proyecto

El Panel de Clima es una Aplicación Web Progresiva (PWA) que proporciona información meteorológica completa con hermosas visualizaciones de datos. Los usuarios pueden rastrear múltiples ubicaciones, ver tendencias históricas y recibir alertas de clima severo.

## Características

### Visualización del Clima Actual

- Temperatura, humedad, velocidad del viento y precipitación
- Temperatura de "sensación térmica" con índice de calor/sensación de frío
- Índice UV e información de calidad del aire
- Horarios de amanecer y atardecer

### Pronóstico de 7 Días

Tarjetas de pronóstico interactivas que muestran:

- Temperaturas máximas y mínimas diarias
- Probabilidad de precipitación
- Condiciones del viento
- Iconos y descripciones del clima

### Visualización de Datos

Construido con **D3.js** para gráficos ricos e interactivos:

```javascript
// Gráfico de tendencia de temperatura
const temperatureChart = d3
  .select('#temp-chart')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const line = d3
  .line()
  .x((d) => xScale(d.date))
  .y((d) => yScale(d.temperature))
  .curve(d3.curveMonotoneX);

temperatureChart.append('path').datum(data).attr('class', 'line').attr('d', line);
```

## Stack Técnico

- **Frontend**: Vue.js 3 con Composition API
- **Gráficos**: D3.js para visualización de datos
- **API**: OpenWeather API para datos meteorológicos
- **Almacenamiento**: IndexedDB para almacenamiento en caché de datos sin conexión
- **Herramienta de Construcción**: Vite para desarrollo rápido y construcciones optimizadas

## Características de PWA

La aplicación funciona sin conexión y puede instalarse en dispositivos móviles:

- Service worker para funcionalidad sin conexión
- Sincronización en segundo plano para actualizaciones de datos
- Notificaciones push para alertas meteorológicas
- Manifiesto de aplicación para instalación

## Ejemplo de Código

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchWeatherData } from '@/api/weather';

const weather = ref<WeatherData | null>(null);
const loading = ref(true);

onMounted(async () => {
  try {
    const position = await getCurrentPosition();
    weather.value = await fetchWeatherData(position.coords);
  } catch (error) {
    console.error('Error al obtener el clima:', error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="weather-dashboard">
    <LoadingSpinner v-if="loading" />
    <WeatherDisplay v-else :data="weather" />
  </div>
</template>
```

## Optimizaciones de Rendimiento

1. **Carga Diferida**: División de código basada en rutas
2. **Optimización de Imágenes**: Formato WebP con respaldos
3. **Caché de API**: Almacenar en caché datos meteorológicos durante 10 minutos
4. **Búsqueda con Debounce**: Prevenir llamadas excesivas a la API durante la búsqueda de ubicación

## Despliegue

Desplegado en **Netlify** con despliegues automáticos desde la rama principal. La PWA se sirve a través de HTTPS con encabezados de caché apropiados para un rendimiento óptimo.

## Enlaces

- [Demo en Vivo](https://weather-dashboard-demo.netlify.app)
- [Código Fuente](https://github.com/example/weather-dashboard)
