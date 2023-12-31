import { derived, writable } from 'svelte/store';
import translations from './content';

export const locale = writable(getLocale());

export function getLocale() {
  const storedLocale =
    localStorage.getItem('lang') ??
    location.pathname.slice(0, 3).replace('/', '');

  const resultLocale =
    storedLocale.trim() === '' || !storedLocale ? 'en' : storedLocale;
  localStorage.setItem('lang', resultLocale);

  return resultLocale;
}

function translate(locale: string, key: string, vars: any) {
  if (!key) throw new Error('no key provided to $t()');
  if (!locale) throw new Error(`no translation for key "${key}"`);

  let text = translations[locale][key];

  if (!text) throw new Error(`no translation found for ${locale}.${key}`);

  Object.keys(vars).forEach((k) => {
    const regex = new RegExp(`{{${k}}}`, 'g');
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const t = derived(
  locale,
  ($locale) =>
    (key, vars = {}) =>
      translate($locale, key, vars)
);
