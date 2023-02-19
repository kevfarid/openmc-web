export default interface LangContext {
  lang: string;
  setLang: (lang: string) => void;
  t: <T>(key: string) => T;
}
