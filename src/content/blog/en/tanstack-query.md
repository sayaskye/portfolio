---
title: 'Mastering TanStack Query: Beyond Simple Data Fetching'
description: 'How I used TanStack Query to bridge the gap between IndexedDB and a seamless UI, implementing caching and optimistic updates.'
publishDate: '2026-03-16'
tags: ['React', 'TanStack Query', 'State Management', 'Performance']
language: 'en'
id: 'tanstack-query-deep-dive'
category: frontend
image:
  src: 'https://cozufpnpwuuvgyvjtqlk.supabase.co/storage/v1/object/public/portfolio/tsq.webp'
  alt: 'Visualization of Cache and Synchronization'
---

# The Problem: Async State is Not Global State

Most developers mistake server state for global state. When building my EPUB reader, the challenge was handling data that wasn't just "there"—it lived in **IndexedDB** or a remote server. Using `useEffect` to sync this would have led to a "spaghetti" of race conditions and inconsistent UI states.

## Why TanStack Query?

I chose TanStack Query (formerly React Query) because it functions as an **asynchronous state manager**. It doesn't care _where_ the data comes from (API or IndexedDB); it only cares about managing its lifecycle.

### 1. The Power of "Stale-While-Revalidate"

In the reader, when a user opens a book, the UI displays the cached version immediately while the library checks for updates in the background. This is the difference between a "loading spinner" and a "frictionless experience."

### 2. Bridging the Gap with IndexedDB

A key technical decision was using TanStack Query to wrap IndexedDB calls. This allowed me to:

- Use declarative `isLoading` and `isError` states.
- Automatically refetch or invalidate data when a book was deleted or added.

## Advanced Pattern: Optimistic Updates

One of the most powerful features I implemented was **Optimistic Updates**. When a user changes any data:

1. **The UI updates instantly**, assuming the write operation will succeed.
2. **The background task** updates IndexedDB/Backend.
3. **Rollback logic:** If the task fails, TanStack Query automatically reverts the UI to the previous "known good" state using the `onMutate` and `onError` callbacks.

```typescript
// Example of the logic used
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
        //...Logic of data handling
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

## Conclusion

- By treating every asynchronous source as a managed query, I reduced the "glue code" in my components.
- The result is a UI that feels local, even when it's talking to a remote database.
