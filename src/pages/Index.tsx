import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cookie, Download, HardDrive, MemoryStick, Wifi, Cpu, Sparkles, GitFork as Github, RefreshCw, Palette, Puzzle, Hand, LayoutGrid, Check, X, Quote, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import heroImg from "@/assets/cookie-hero.jpg";
import { useI18n } from "@/i18n/I18nContext";

const Index = () => {
  const { t } = useI18n();
  const requirements = [
    { icon: MemoryStick, label: t("req.label.ram"), min: "1 GB", rec: "2 GB" },
    { icon: HardDrive, label: t("req.label.disk"), min: "20 GB", rec: "60 GB" },
    { icon: Cpu, label: t("req.label.cpu"), min: "1 GHz x86_64", rec: t("req.cpu.rec") },
    { icon: Wifi, label: t("req.label.net"), min: t("req.net.min"), rec: t("req.net.rec") },
  ];
  const features = [
    { icon: RefreshCw, title: t("feat.updater.title"), text: t("feat.updater.text") },
    { icon: Palette, title: t("feat.customizer.title"), text: t("feat.customizer.text") },
    { icon: Puzzle, title: t("feat.accessories.title"), text: t("feat.accessories.text") },
    { icon: Hand, title: t("feat.welcome.title"), text: t("feat.welcome.text") },
    { icon: LayoutGrid, title: t("feat.center.title"), text: t("feat.center.text") },
  ];
  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];
  const roadmap = [
    { title: t("road.q1.title"), text: t("road.q1.text") },
    { title: t("road.q2.title"), text: t("road.q2.text") },
    { title: t("road.q3.title"), text: t("road.q3.text") },
    { title: t("road.q4.title"), text: t("road.q4.text") },
  ];
  const comparison = [
    { feat: t("comp.row.install"), cookie: "15 min", debian: "30 min" },
    { feat: t("comp.row.theme"), cookie: "yes", debian: "no" },
    { feat: t("comp.row.tools"), cookie: "yes", debian: "no" },
    { feat: t("comp.row.welcome"), cookie: "yes", debian: "no" },
    { feat: t("comp.row.update"), cookie: "yes", debian: "partial" },
    { feat: t("comp.row.repo"), cookie: "yes", debian: "yes" },
  ];
  const testimonials = [
    { text: t("tst.1.text"), author: t("tst.1.author") },
    { text: t("tst.2.text"), author: t("tst.2.author") },
    { text: t("tst.3.text"), author: t("tst.3.author") },
  ];
  const renderCell = (v: string) => {
    if (v === "yes") return <span className="inline-flex items-center gap-1.5 text-accent font-semibold"><Check className="w-4 h-4" /> {t("comp.yes")}</span>;
    if (v === "no") return <span className="inline-flex items-center gap-1.5 text-muted-foreground"><X className="w-4 h-4" /> {t("comp.no")}</span>;
    if (v === "partial") return <span className="inline-flex items-center gap-1.5 text-muted-foreground">{t("comp.partial")}</span>;
    return <span className="font-mono text-foreground">{v}</span>;
  };
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 bg-warm-gradient overflow-hidden">
        <div className="absolute inset-0 crumb-bg opacity-40" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-glaze)' }} />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary-foreground"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" /> {t("hero.badge")}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-balance mb-6 break-words">
              {t("hero.title.1")}<br />{t("hero.title.2")} <span className="text-accent italic">{t("hero.title.accent")}</span>.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full text-base h-14 px-8 shadow-glow">
                <a href="#download"><Download className="w-5 h-5 mr-2" /> {t("hero.download")}</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-base h-14 px-8 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <a href="https://github.com/GAJA-Team/cookieos" target="_blank" rel="noreferrer" className="inline-flex items-center"><Github className="w-5 h-5 mr-2" /> {t("hero.github")}</a>
              </Button>
            </div>
            <div className="scroll-x flex items-center gap-6 mt-10 text-sm text-primary-foreground/60 whitespace-nowrap pb-2">
              <span>{t("hero.stat.bakes")}</span>
              <span>•</span>
              <span>{t("hero.stat.oss")}</span>
              <span>•</span>
              <span>{t("hero.stat.gluten")}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-accent/30 blur-3xl animate-glow-pulse" />
            <div className="relative animate-float-slow">
              <img
                src={heroImg}
                alt={t("hero.imgAlt")}
                width={1024}
                height={1024}
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 text-xs uppercase tracking-widest animate-bounce">
          {t("hero.scroll")}
        </div>
      </section>

      {/* RELEASE / SINGLE ISO */}
      <section id="flavors" className="py-32 bg-dough-gradient relative">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">{t("rel.eyebrow")}</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 text-balance">
              {t("rel.title.1")}<br />{t("rel.title.2")}
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-0 bg-card border border-border rounded-3xl overflow-hidden shadow-cookie"
          >
            <div className="md:col-span-2 p-10 border-b md:border-b-0 md:border-r border-border bg-warm-gradient text-primary-foreground relative">
              <div className="absolute inset-0 crumb-bg opacity-20" />
              <div className="relative flex items-start gap-5">
                <Cookie className="w-14 h-14 text-accent shrink-0" strokeWidth={2} />
                <div>
                  <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-accent/20 text-accent">{t("rel.card.badge")}</span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-2">{t("rel.card.title")}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-md">
                    {t("rel.card.desc")}
                  </p>
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                    <a href="#download"><Download className="w-5 h-5 mr-2" /> {t("rel.card.cta")}</a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center gap-5">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{t("rel.arch")}</div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-semibold px-3 py-1.5 rounded-full bg-accent/20 text-foreground">amd64</span>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{t("rel.soon")}</div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-semibold px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-dashed border-border">i386 · soon</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" className="py-32 bg-[hsl(var(--cookie-burnt))] text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 crumb-bg opacity-20" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">{t("req.eyebrow")}</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 text-balance leading-[1.05]">
                {t("req.title.1")}<br />{t("req.title.2")} <span className="text-accent italic">{t("req.title.accent")}</span>.
              </h2>
              <p className="text-primary-foreground/70 mt-6 text-lg leading-relaxed max-w-md">
                {t("req.desc")}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {requirements.map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 rounded-2xl p-6 hover:border-accent/50 transition-colors"
                >
                  <r.icon className="w-7 h-7 text-accent mb-4" strokeWidth={2} />
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-1">{r.label}</div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-primary-foreground/60">{t("req.min")}</span>
                      <span className="font-mono font-semibold">{r.min}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-primary-foreground/60">{t("req.rec")}</span>
                      <span className="font-mono font-semibold text-accent">{r.rec}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-32 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">{t("feat.eyebrow")}</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 text-balance">
              {t("feat.title.1")} <span className="italic text-primary">{t("feat.title.accent")}</span>.
            </h2>
            <p className="text-muted-foreground mt-5 text-lg">{t("feat.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-8 rounded-3xl bg-card border border-border hover:shadow-warm hover:-translate-y-1 transition-all"
              >
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                  <f.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      {/* COMPARISON */}
      <section id="comparison" className="py-32 bg-muted/30">
        <div className="container max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">{t("comp.eyebrow")}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-balance">{t("comp.title")}</h2>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-border bg-card">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-muted/50">
                <tr>
                  <th className="p-5 font-semibold">{t("comp.col.feat")}</th>
                  <th className="p-5 font-semibold text-primary">{t("comp.col.cookie")}</th>
                  <th className="p-5 font-semibold text-muted-foreground">{t("comp.col.debian")}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feat} className={i % 2 ? "bg-muted/20" : ""}>
                    <td className="p-5 font-medium">{row.feat}</td>
                    <td className="p-5">{renderCell(row.cookie)}</td>
                    <td className="p-5">{renderCell(row.debian)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="py-32 bg-[hsl(var(--cookie-burnt))] text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 crumb-bg opacity-20" />
        <div className="container relative">
          <div className="max-w-2xl mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">{t("road.eyebrow")}</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 text-balance">{t("road.title")}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {roadmap.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 rounded-2xl p-6 hover:border-accent/50 transition-colors"
              >
                <MapPin className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-display text-lg font-bold mb-2">{r.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-32 bg-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">{t("tst.eyebrow")}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-balance">{t("tst.title")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((tst, i) => (
              <motion.figure
                key={tst.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border"
              >
                <Quote className="w-8 h-8 text-accent mb-4" />
                <blockquote className="text-foreground/90 leading-relaxed mb-5">{tst.text}</blockquote>
                <figcaption className="text-sm text-muted-foreground font-mono">— {tst.author}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-dough-gradient">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">{t("faq.eyebrow")}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-balance">{t("faq.title")}</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-card border border-border p-6 open:shadow-warm transition-shadow">
                <summary className="flex items-center justify-between cursor-pointer font-display text-lg font-semibold list-none">
                  {f.q}
                  <span className="ml-4 text-accent text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section id="download" className="py-32 bg-dough-gradient relative overflow-hidden">
        <div className="absolute inset-0 crumb-bg opacity-30" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <Cookie className="w-20 h-20 text-accent mx-auto mb-8 animate-float-slow" strokeWidth={1.8} />
                <h2 className="font-display text-5xl md:text-7xl font-bold leading-[1] text-balance mb-6">
              {t("dl.title.1")}<br />{t("dl.title.2")}<span className="text-accent italic"> {t("dl.title.accent")}</span>.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              {t("dl.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-base h-14 px-10 shadow-cookie">
                <a href="#"><Download className="w-5 h-5 mr-2" /> {t("dl.cta.main")}</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-base h-14 px-8 border-primary text-primary hover:bg-primary/10">
                <a href="#">{t("dl.cta.alt")}</a>
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-3 text-sm text-muted-foreground font-mono">
              <span className="px-3 py-1 rounded-full bg-accent/20 text-foreground">amd64</span>
              <span className="px-3 py-1 rounded-full border border-dashed border-border">{t("dl.soon")}</span>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
