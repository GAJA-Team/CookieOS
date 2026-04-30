import { Code2, FileText, Languages, FlaskConical } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { useI18n } from "@/i18n/I18nContext";

const Contributing = () => {
  const { t } = useI18n();
  const ways = [
    { icon: Code2, title: t("ctb.code.title"), text: t("ctb.code.text") },
    { icon: FileText, title: t("ctb.docs.title"), text: t("ctb.docs.text") },
    { icon: Languages, title: t("ctb.translate.title"), text: t("ctb.translate.text") },
    { icon: FlaskConical, title: t("ctb.test.title"), text: t("ctb.test.text") },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="pt-32 pb-12 bg-warm-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 crumb-bg opacity-30" />
        <div className="container relative">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">{t("ctb.eyebrow")}</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 text-balance">{t("ctb.title")}</h1>
          <p className="text-primary-foreground/80 mt-4 text-lg max-w-2xl">{t("ctb.subtitle")}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container grid md:grid-cols-2 gap-6 max-w-5xl">
          {ways.map((w) => (
            <div key={w.title} className="p-8 rounded-3xl bg-card border border-border">
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-5">
                <w.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">{w.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{w.text}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
};

export default Contributing;
