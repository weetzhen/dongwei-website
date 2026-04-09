import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import messages from './local/index';

const detectLanguageByIP = async (): Promise<string> => {
  try {
    const response = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) });
    const data = await response.json();
    const countryCode: string = (data.country_code || '').toUpperCase();
    if (countryCode === 'CN' || countryCode === 'TW' || countryCode === 'HK' || countryCode === 'MO') {
      return 'zh';
    }
    if (countryCode === 'JP') {
      return 'ja';
    }
    return 'en';
  } catch {
    return 'en';
  }
};

const savedLang = localStorage.getItem('i18n_lang');

i18n
  .use(initReactI18next)
  .init({
    lng: savedLang || 'en',
    fallbackLng: 'en',
    debug: false,
    resources: messages,
    interpolation: {
      escapeValue: false,
    },
  });

if (!savedLang) {
  detectLanguageByIP().then((lang) => {
    i18n.changeLanguage(lang);
  });
}

export default i18n;
