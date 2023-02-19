import LangContext from '@/context/LangContext';
import React, { PropsWithChildren, useCallback, useEffect } from 'react';
import ILangContext from '@/models/LangContext';
import Generic from '@/models/Generic';

export default function LangProvider({ children }: PropsWithChildren) {
  const [lang, setLang] = React.useState('en');
  const [langData, setLangData] = React.useState<Generic<string>>({});

  const getLangData = useCallback(async () => {
    const response = await fetch(`/lang/${lang}.json`);
    const data = await response.json().catch(() => ({}));

    setLangData(data);
  }, [lang]);

  useEffect(() => {
    const navigatorLang = navigator.language.split('-')[0] || 'en';
    const lang = localStorage.getItem('lang');
    if (lang) {
      setLang(lang);
    } else {
      setLang(navigatorLang);
      localStorage.setItem('lang', navigatorLang);
    }
  }, []);

  useEffect(() => {
    getLangData();
  }, [getLangData, lang]);

  const t = function <T>(key: string): T {
    return langData[key] as T;
  };

  const value: ILangContext = {
    lang,
    setLang,
    t,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
