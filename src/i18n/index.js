import { resolveBrowserLocale } from 'react-admin';
import enMessages from 'ra-language-english';
import esMessages from 'ra-language-spanish';
import enDomain from './en';
import esDomain from './es';

export const messages = {
  en: { ...enMessages, ...enDomain },
  es: { ...esMessages, ...esDomain }
};

export const i18nProvider = locale => {
  return messages[locale];
};

export const defaultLocale = localStorage.getItem('locale') || process.env.REACT_APP_DEFAULT_LOCALE || resolveBrowserLocale();
