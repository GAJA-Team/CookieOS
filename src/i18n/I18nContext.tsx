import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { dict, Lang, TKey } from "./dict";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TKey) => string;
};

const I18nCtx = createContext<Ctx | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("cookieos-lang") as Lang | null;
    if (saved === "pl" || saved === "en") return saved;
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("cookieos-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: TKey) => dict[lang][key] ?? dict.pl[key] ?? key;

  return (
    <I18nCtx.Provider value={{ lang, setLang: setLangState, t }}>{children}</I18nCtx.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};