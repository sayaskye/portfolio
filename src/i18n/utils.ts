import type { LanguageCode } from '@/types/i18n';

export function getStoredLanguage(): LanguageCode | null {
  if (typeof localStorage === 'undefined') return null;
  return localStorage.getItem('preferred-language');
}

export function setStoredLanguage(lang: LanguageCode): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem('preferred-language', lang);
}
