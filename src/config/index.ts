export const SITE_CONFIG = {
  formspreeId: import.meta.env.PUBLIC_FORMSPREE_ID,
  cvUrls: {
    en: 'https://cozufpnpwuuvgyvjtqlk.supabase.co/storage/v1/object/public/portfolio/AndresCazares_CV_EN.pdf',
    es: 'https://cozufpnpwuuvgyvjtqlk.supabase.co/storage/v1/object/public/portfolio/AndresCazares_CV_ES.pdf',
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
