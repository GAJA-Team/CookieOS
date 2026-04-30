import { useI18n } from "@/i18n/I18nContext";

export const LangToggle = ({ className = "" }: { className?: string }) => {
  const { lang, setLang } = useI18n();
  const next = lang === "pl" ? "en" : "pl";
  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={`Switch language to ${next.toUpperCase()}`}
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-current/30 text-xs font-mono uppercase tracking-wider hover:text-accent hover:border-accent transition-colors ${className}`}
    >
      <span className={lang === "pl" ? "text-accent" : "opacity-60"}>PL</span>
      <span className="opacity-40">/</span>
      <span className={lang === "en" ? "text-accent" : "opacity-60"}>EN</span>
    </button>
  );
};