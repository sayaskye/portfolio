import type { LanguageCode, Translations, I18nConfig, ValidationResult } from '@/types/i18n';
import en from './locales/en.json';
import es from './locales/es.json';

const translations: Record<LanguageCode, Translations> = {
  en,
  es,
};

const config: I18nConfig = {
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'es'],
  fallbackLanguage: 'en',
};

export function getTranslation(key: string, lang: LanguageCode): string {
  const keys = key.split('.');
  let value: unknown = translations[lang];

  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k];
  }

  if (typeof value === 'string') {
    return value;
  }

  // Fallback to default language
  value = translations[config.fallbackLanguage];
  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k];
  }

  return typeof value === 'string' ? value : key;
}

export function getSupportedLanguages(): LanguageCode[] {
  return config.supportedLanguages;
}

export function getDefaultLanguage(): LanguageCode {
  return config.defaultLanguage;
}

export function validateTranslations(): ValidationResult {
  const defaultKeys = extractKeys(translations[config.defaultLanguage]);
  const missingKeys: ValidationResult['missingKeys'] = [];

  for (const lang of config.supportedLanguages) {
    if (lang === config.defaultLanguage) continue;

    const langKeys = extractKeys(translations[lang]);
    for (const key of defaultKeys) {
      if (!langKeys.has(key)) {
        missingKeys.push({ language: lang, key });
      }
    }
  }

  return {
    valid: missingKeys.length === 0,
    missingKeys,
  };
}

function extractKeys(obj: unknown, prefix = ''): Set<string> {
  const keys = new Set<string>();
  if (typeof obj !== 'object' || obj === null) {
    return keys;
  }
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null) {
      extractKeys(value, fullKey).forEach((k) => keys.add(k));
    } else {
      keys.add(fullKey);
    }
  }
  return keys;
}
