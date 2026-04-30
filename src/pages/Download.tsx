import { Download as DownloadIcon, Cookie, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { useI18n } from "@/i18n/I18nContext";

const releases = [
  { version: "1.0 Genesis", arch: "amd64", size: "2.1 GB", date: "2026-04-30", current: true },
  { version: "0.9 Pretzel RC", arch: "amd64", size: "2.0 GB", date: "2026-03-12", current: false },
  { version: "0.8 Brioche Beta", arch: "amd64", size: "1.9 GB", date: "2026-02-01", current: false },
];

const Download = () => {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="pt-32 pb-12 bg-warm-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 crumb-bg opacity-30" />
        <div className="container relative">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">{t("dlp.eyebrow")}</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold mt-3 text-balance max-w-3xl">{t("dlp.title")}</h1>
          <p className="text-primary-foreground/80 mt-4 text-lg max-w-2xl">{t("dlp.subtitle")}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl space-y-6">
          {releases.map((r) => (
            <div key={r.version} className={`p-8 rounded-3xl border ${r.current ? "bg-card border-accent shadow-warm" : "bg-card/50 border-border"}`}>
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <Cookie className={`w-10 h-10 shrink-0 ${r.current ? "text-accent" : "text-muted-foreground"}`} strokeWidth={2} />
                  <div>
                    <h3 className="font-display text-2xl font-bold">CookieOS {r.version}</h3>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-sm text-muted-foreground font-mono">
                      <span>{t("dlp.arch")}: <span className="text-foreground">{r.arch}</span></span>
                      <span>{t("dlp.size")}: <span className="text-foreground">{r.size}</span></span>
                      <span>{t("dlp.released")}: <span className="text-foreground">{r.date}</span></span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button asChild className={`rounded-full ${r.current ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}`} variant={r.current ? "default" : "outline"}>
                    <a href="#"><DownloadIcon className="w-4 h-4 mr-2" /> {t("dlp.download")}</a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full">
                    <a href="#">{t("dlp.torrent")}</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-start gap-3 p-5 rounded-2xl bg-muted/50 text-sm text-muted-foreground">
            <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <p>{t("dlp.checksum")}</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Download;
