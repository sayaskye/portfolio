export type LanguageCode = string;

export interface TranslationNamespace {
  [key: string]: string | TranslationNamespace;
}

export type Translations = Record<string, TranslationNamespace>;

export interface I18nConfig {
  defaultLanguage: LanguageCode;
  supportedLanguages: LanguageCode[];
  fallbackLanguage: LanguageCode;
}

export interface I18nManager {
  getTranslation(key: string, lang: LanguageCode): string;
  getSupportedLanguages(): LanguageCode[];
  getDefaultLanguage(): LanguageCode;
  validateTranslations(): ValidationResult;
}

export interface ValidationResult {
  valid: boolean;
  missingKeys: {
    language: LanguageCode;
    key: string;
  }[];
}
