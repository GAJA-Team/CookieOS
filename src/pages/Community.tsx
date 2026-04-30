import { MessageCircle, Users, GitFork as GithubIcon, Globe } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { useI18n } from "@/i18n/I18nContext";

const Community = () => {
  const { t } = useI18n();
  const channels = [
    { icon: MessageCircle, title: t("com.discord.title"), text: t("com.discord.text"), url: "https://discord.gg/cookieos" },
    { icon: Globe, title: t("com.matrix.title"), text: t("com.matrix.text"), url: "https://matrix.to/#/#cookieos:matrix.org" },
    { icon: GithubIcon, title: t("com.github.title"), text: t("com.github.text"), url: "https://github.com/GAJA-Team/cookieos/discussions" },
    { icon: Users, title: t("com.forum.title"), text: t("com.forum.text"), url: "https://forum.cookieos.org" },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="pt-32 pb-12 bg-dough-gradient">
        <div className="container">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">{t("com.eyebrow")}</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 text-balance">{t("com.title")}</h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">{t("com.subtitle")}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container grid md:grid-cols-2 gap-6 max-w-5xl">
          {channels.map((c) => (
            <a key={c.title} href={c.url} target="_blank" rel="noreferrer" className="group p-8 rounded-3xl bg-card border border-border hover:shadow-warm hover:-translate-y-0.5 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-5">
                <c.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.text}</p>
            </a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
};

export default Community;
