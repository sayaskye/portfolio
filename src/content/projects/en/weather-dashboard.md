---
title: Weather Dashboard
description: An interactive weather dashboard with real-time forecasts, historical data visualization, and location-based alerts.
publishDate: 2023-11-20
tags: [Vue.js, D3.js, OpenWeather API, PWA]
featured: false
image:
  src: 'https://placehold.co/800x400/10B981/ffffff?text=Second+Project'
  alt: 'Second project banner'
github: https://github.com/example/weather-dashboard
demo: https://weather-dashboard-demo.netlify.app
language: en
id: weather-dashboard
category: frontend
---

## Project Overview

The Weather Dashboard is a Progressive Web App (PWA) that provides comprehensive weather information with beautiful data visualizations. Users can track multiple locations, view historical trends, and receive severe weather alerts.

## Features

### Current Weather Display

- Temperature, humidity, wind speed, and precipitation
- "Feels like" temperature with heat index/wind chill
- UV index and air quality information
- Sunrise and sunset times

### 7-Day Forecast

Interactive forecast cards showing:

- Daily high and low temperatures
- Precipitation probability
- Wind conditions
- Weather icons and descriptions

### Data Visualization

Built with **D3.js** for rich, interactive charts:

```javascript
// Temperature trend chart
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

## Technical Stack

- **Frontend**: Vue.js 3 with Composition API
- **Charts**: D3.js for data visualization
- **API**: OpenWeather API for weather data
- **Storage**: IndexedDB for offline data caching
- **Build Tool**: Vite for fast development and optimized builds

## PWA Features

The application works offline and can be installed on mobile devices:

- Service worker for offline functionality
- Background sync for data updates
- Push notifications for weather alerts
- App manifest for installation

## Code Example

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
    console.error('Failed to fetch weather:', error);
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

## Performance Optimizations

1. **Lazy Loading**: Route-based code splitting
2. **Image Optimization**: WebP format with fallbacks
3. **API Caching**: Cache weather data for 10 minutes
4. **Debounced Search**: Prevent excessive API calls during location search

## Deployment

Deployed on **Netlify** with automatic deployments from the main branch. The PWA is served over HTTPS with proper caching headers for optimal performance.

## Links

- [Live Demo](https://weather-dashboard-demo.netlify.app)
- [Source Code](https://github.com/example/weather-dashboard)
