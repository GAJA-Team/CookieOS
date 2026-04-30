import { Heart, Lock, Sparkles } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { useI18n } from "@/i18n/I18nContext";

const About = () => {
  const { t } = useI18n();
  const values = [
    { icon: Heart, title: t("abt.v1.title"), text: t("abt.v1.text") },
    { icon: Lock, title: t("abt.v2.title"), text: t("abt.v2.text") },
    { icon: Sparkles, title: t("abt.v3.title"), text: t("abt.v3.text") },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="pt-32 pb-12 bg-dough-gradient">
        <div className="container">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">{t("abt.eyebrow")}</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 text-balance max-w-3xl">{t("abt.title")}</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="container max-w-3xl space-y-5 text-lg leading-relaxed text-foreground/90">
          <p>{t("abt.p1")}</p>
          <p>{t("abt.p2")}</p>
          <p>{t("abt.p3")}</p>
        </div>
      </section>
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">{t("abt.values")}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-3xl bg-card border border-border">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
};

export default About;
