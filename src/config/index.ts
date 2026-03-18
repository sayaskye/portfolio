export const SITE_CONFIG = {
  formspreeId: import.meta.env.PUBLIC_FORMSPREE_ID,
  cvUrls: {
    en: 'https://placeholder.com/en-cv.pdf',
    es: 'https://placeholder.com/es-cv.pdf',
  },
  socials: {
    github: 'https://github.com/sayaskye',
    linkedin: 'https://linkedin.com/in/andres-cazares-dev',
  },
  site: {
    url: 'https://zares.dev',
    email: 'zaresdev@gmail.com',
  },
} as const;

export type SupportedLanguage = keyof typeof SITE_CONFIG.cvUrls;
