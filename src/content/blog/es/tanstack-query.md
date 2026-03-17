---
title: 'Dominando TanStack Query: Más allá del fetching de datos'
description: 'Cómo utilicé TanStack Query para cerrar la brecha entre IndexedDB y una interfaz fluida, implementando caché y actualizaciones optimistas.'
publishDate: '2026-03-16'
tags: ['React', 'TanStack Query', 'State Management', 'Performance']
language: 'es'
id: 'tanstack-query-deep-dive'
category: frontend
image:
  src: 'https://placehold.co/800x400/0891b2/ffffff?text=Arquitectura+TanStack+Query'
  alt: 'Visualización de Caché y Sincronización'
---

# El Problema: El estado asíncrono no es estado global

Muchos desarrolladores confunden el estado del servidor con el estado global. Al construir mi lector de EPUB, el desafío era manejar datos que no estaban simplemente "ahí"; residían en **IndexedDB** o en un servidor remoto. Usar `useEffect` para sincronizar esto habría resultado en un "espagueti" de condiciones de carrera (race conditions) y estados de UI inconsistentes.

## ¿Por qué TanStack Query?

Elegí TanStack Query (anteriormente React Query) porque funciona como un **gestor de estado asíncrono**. No le importa de _dónde_ vienen los datos (API o IndexedDB); solo le importa gestionar su ciclo de vida.

### 1. El poder de "Stale-While-Revalidate"

En el lector, cuando un usuario abre un libro, la interfaz muestra la versión en caché inmediatamente mientras la librería busca actualizaciones en segundo plano. Esta es la diferencia entre un "spinner de carga" y una "experiencia sin fricciones".

### 2. Conectando con IndexedDB

Una decisión técnica clave fue usar TanStack Query para envolver las llamadas a IndexedDB. Esto me permitió:

- Utilizar estados declarativos de `isLoading` e `isError`.
- Refrescar o invalidar datos automáticamente cuando un libro se elimina o se añade.

## Patrón Avanzado: Actualizaciones Optimistas (Optimistic Updates)

Una de las características más potentes que implementé fueron las **Actualizaciones Optimistas**. Cuando un usuario cambia cualquier dato:

1. **La interfaz se actualiza instantáneamente**, asumiendo que la operación de escritura tendrá éxito.
2. **La tarea en segundo plano** actualiza IndexedDB o el Backend.
3. **Lógica de Rollback:** Si la tarea falla, TanStack Query revierte automáticamente la UI al estado anterior "conocido como bueno" utilizando los callbacks `onMutate` y `onError`.

```typescript
// Ejemplo de la lógica utilizada
export const useToggleFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bookId: string) => booksService.toggleFav(bookId),
    onMutate: async (bookId) => {
      await queryClient.cancelQueries({ queryKey: booksKeys.lists() });
      const previousQueries = queryClient.getQueriesData<InfiniteData<PaginatedUserBooks>>({
        queryKey: booksKeys.lists(),
      });

      queryClient.setQueriesData<InfiniteData<PaginatedUserBooks>>(
        { queryKey: booksKeys.lists() }
        //...Logica del manejo de la data
      );

      return { previousQueries };
    },
    onError: (_, __, context) => {
      context?.previousQueries?.forEach(([queryKey, oldData]) => {
        queryClient.setQueryData(queryKey, oldData);
      });
      useNotificationStore.getState().notify('Favorite action error', 'error');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: booksKeys.lists() });
    },
  });
};
```

## Conclusión

- Al tratar cada fuente asíncrona como una consulta gestionada, reduje el "código de pegamento" (glue code) en mis componentes.
- El resultado es una interfaz que se siente local, incluso cuando se comunica con una base de datos remota.
