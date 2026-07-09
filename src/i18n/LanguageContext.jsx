import { createContext, useContext, useEffect, useState } from 'react';
import en from './en.json';
import id from './id.json';

const dictionaries = { en, id };
const STORAGE_KEY = 'nuos-lang';
const DEFAULT_LANG = 'id'; // Bahasa Indonesia is the default

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_LANG;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'en' || stored === 'id' ? stored : DEFAULT_LANG;
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // Resolve a dot-path key (e.g. "hero.trust1") against the active dictionary.
  const t = (path) => {
    const value = path
      .split('.')
      .reduce((acc, key) => (acc == null ? undefined : acc[key]), dictionaries[lang]);
    return value === undefined ? path : value;
  };

  const toggleLang = () => setLang((prev) => (prev === 'id' ? 'en' : 'id'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider');
  return ctx;
}
