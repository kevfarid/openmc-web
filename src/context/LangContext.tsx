import ILangContext from '@/models/LangContext';
import { createContext } from 'react';

const LangContext = createContext<ILangContext>({
  lang: 'en',
} as ILangContext);

export default LangContext;
