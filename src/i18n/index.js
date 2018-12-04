import enAdmin from 'ra-language-english';
import esAdmin from 'ra-language-spanish';

import en from './en';
import es from './es';

export const messages = {
  en: { ...enAdmin, ...en },
  es: { ...esAdmin, ...es }
};

export const i18nProvider = locale => {
  console.log(messages[locale])
  return messages[locale];
};
