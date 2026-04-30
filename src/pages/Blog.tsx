import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { posts, tr, categories, type Category } from "@/data/posts";
import { useI18n } from "@/i18n/I18nContext";

const Blog = () => {
  const { t, lang } = useI18n();
  const [active, setActive] = useState<Category | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts
      .filter((p) => active === "all" || p.category === active)
      .filter((p) => {
        if (!q) return true;
        return (
          tr(p.title, lang).toLowerCase().includes(q) ||
          tr(p.excerpt, lang).toLowerCase().includes(q)
        );
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [active, query, lang]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="pt-32 pb-20 bg-warm-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 crumb-bg opacity-30" />
        <div className="container relative">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">{t("blog.eyebrow")}</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold mt-3 text-balance max-w-3xl">
            {t("blog.title.1")}<br />{t("blog.title.2")} <span className="text-accent italic">{t("blog.title.accent")}</span>.
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActive("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === "all" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/70 text-foreground"}`}
              >
                {t("blog.all")}
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === c.id ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/70 text-foreground"}`}
                >
                  {tr(c.label, lang)}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("blog.search")}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-muted/50 border border-border text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">{t("blog.empty")}</p>
          ) : (
            <div className="space-y-6">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Link
                    to={`/blog/${p.slug}`}
                    className="group block p-8 rounded-3xl bg-card border border-border hover:shadow-warm hover:-translate-y-0.5 transition-all"
                  >
                    <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-accent/20 text-foreground font-mono">{tr(p.tag, lang)}</span>
                      <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {p.date}</span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">{tr(p.title, lang)}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-5">{tr(p.excerpt, lang)}</p>
                    <span className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm">
                      {t("blog.readmore")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Blog;
