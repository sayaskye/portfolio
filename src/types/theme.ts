export type ThemeIdentifier = string;

export interface ThemeConfig {
  defaultTheme: ThemeIdentifier;
  supportedThemes: ThemeIdentifier[];
}

export interface ThemeManager {
  getCurrentTheme(): ThemeIdentifier;
  setTheme(theme: ThemeIdentifier): void;
  getSystemTheme(): ThemeIdentifier;
  getSupportedThemes(): ThemeIdentifier[];
}
