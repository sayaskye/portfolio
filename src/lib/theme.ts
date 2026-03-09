import type { ThemeIdentifier, ThemeConfig } from '@/types/theme';

const THEME_STORAGE_KEY = 'preferred-theme';
const THEME_ATTRIBUTE = 'data-theme';

const config: ThemeConfig = {
  defaultTheme: 'light',
  supportedThemes: ['light', 'dark'],
};

export function getCurrentTheme(): ThemeIdentifier {
  if (typeof localStorage === 'undefined') {
    return config.defaultTheme;
  }

  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored && config.supportedThemes.includes(stored)) {
    return stored;
  }

  return getSystemTheme();
}

export function setTheme(theme: ThemeIdentifier): void {
  if (!config.supportedThemes.includes(theme)) {
    console.warn(`Theme "${theme}" is not supported`);
    return;
  }

  document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);

  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }
}

export function getSystemTheme(): ThemeIdentifier {
  if (typeof window === 'undefined') {
    return config.defaultTheme;
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export function getSupportedThemes(): ThemeIdentifier[] {
  return config.supportedThemes;
}

export function initializeTheme(): void {
  const theme = getCurrentTheme();
  setTheme(theme);

  // Listen for system theme changes
  if (typeof window !== 'undefined') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (!stored) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}
