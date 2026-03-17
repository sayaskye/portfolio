---
title: 'Ciclo de vida de autenticación segura con Bun y Hono'
description: 'Implementación de un sistema robusto de rotación de JWT utilizando Refresh Tokens y cookies HttpOnly para máxima seguridad.'
publishDate: '2026-02-02'
tags: ['Backend', 'Security', 'Bun', 'Hono', 'JWT']
language: 'es'
id: 'backend-auth-security'
category: backend
image:
  src: 'https://placehold.co/800x400/599DC2/ffffff?text=Arquitectura+de+Seguridad+Auth'
  alt: 'Diagrama de capa de seguridad mostrando rotación de tokens'
---

# El desafío: Seguridad vs. Experiencia de Usuario

En una aplicación web moderna, mantener a un usuario conectado sin comprometer la seguridad es un equilibrio delicado. Almacenar tokens de larga duración en `localStorage` es un riesgo de seguridad masivo (XSS), mientras que obligar a los usuarios a iniciar sesión cada 15 minutos es una experiencia terrible.

## La estrategia: Rotación de Tokens Dual

Diseñé una capa de seguridad utilizando **Bun** y **Hono** que se basa en dos tipos de JSON Web Tokens (JWT) con roles y ciclos de vida distintos.

### 1. Access Tokens de corta duración

Estos tokens se utilizan para cada petición autenticada. Expiran rápidamente (normalmente en 15 minutos), lo que significa que incluso si uno es interceptado, la ventana de oportunidad para un atacante es mínima.

### 2. Refresh Tokens de larga duración

Para evitar cierres de sesión frecuentes, implementé **Refresh Tokens**.

- **Almacenamiento:** Se almacenan exclusivamente en cookies `HttpOnly`, `Secure` y `SameSite=Strict`. Esto los hace inaccesibles para el JavaScript del lado del cliente, neutralizando eficazmente la mayoría de los robos de tokens basados en XSS.
- **Rol:** Cuando un Access Token expira, el cliente envía el Refresh Token a un endpoint específico para recibir un nuevo par de tokens.

## Implementación Backend: El flujo de refresco

El backend gestiona la rotación verificando la firma del Refresh Token y comprobando su presencia en la base de datos (para permitir la revocación manual).

### Snippet clave: Lógica de refresco de tokens

```typescript
const refreshToken = getCookie(c, 'refresh_token');
if (!refreshToken) return c.text('Unauthorized', 401);

const result = await AuthService.refresh(refreshToken);
if (typeof result === 'object') {
  setAuthCookie(c, tokenTypes.access, result.accessToken, 60 * 15);
  setAuthCookie(c, tokenTypes.refresh, result.refreshToken, 60 * 60 * 24 * 30);
  return c.json({ success: true }, 200);
}
return c.text('Unauthorized', 401);
```

## Integración Frontend: Interceptores transparentes

Para que esto sea invisible para el usuario, el frontend utiliza un interceptor. Cuando una petición devuelve un estado `401 Unauthorized`, la aplicación intenta automáticamente refrescar el token en segundo plano y reintenta la petición original.

### Snippet clave: Interceptor de Axios/Fetch

```typescript
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };
    if (error.response?.status !== 401 || originalRequest.url?.includes('/auth/refresh')) {
      return Promise.reject(error);
    }
    if (originalRequest._retry) {
      return Promise.reject(error);
    }
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve: () => resolve(api(originalRequest)),
          reject: (err) => reject(err),
        });
      });
    }
    originalRequest._retry = true;
    isRefreshing = true;

    try {
      await api.post('/auth/refresh');
      processQueue();
      return api(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError as Error);
      if (typeof window !== 'undefined') {
        window.location.href = '/login?expired=true';
      }
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);
```

## ¿Por qué este enfoque?

- **Protección contra XSS:** Los tokens sensibles nunca son alcanzables vía `document.cookie` o `localStorage`.
- **Mitigación de CSRF:** El uso de cookies `SameSite` y cabeceras personalizadas asegura que las peticiones deban originarse desde nuestro dominio de confianza.
- **Control Granular:** Podemos revocar una sesión específica (Refresh Token) desde la base de datos sin afectar a otros dispositivos que el usuario pueda estar utilizando.

## Conclusión

Construir un backend seguro no se trata solo de verificar una contraseña; se trata de gestionar el ciclo de vida completo de una sesión. Al combinar el rendimiento de Bun con una política estricta de rotación de tokens, el sistema se mantiene rápido, invisible para el usuario y altamente resistente a las vulnerabilidades web comunes.
