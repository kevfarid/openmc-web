import LangContext from '@/context/LangContext';
import { useContext } from 'react';

export default function useLang() {
  const { lang, t } = useContext(LangContext);

  return { lang, t };
}
