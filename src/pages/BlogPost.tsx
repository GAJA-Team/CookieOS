import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { posts, tr } from "@/data/posts";
import { useI18n } from "@/i18n/I18nContext";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const { t, lang } = useI18n();

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteNav />
        <section className="pt-40 pb-20 container text-center">
          <h1 className="font-display text-4xl font-bold mb-4">{t("blog.notfound.title")}</h1>
          <p className="text-muted-foreground mb-8">{t("blog.notfound.desc")}</p>
          <Link to="/blog" className="text-accent font-semibold inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> {t("blog.notfound.back")}
          </Link>
        </section>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <article>
        <header className="pt-32 pb-16 bg-warm-gradient text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 crumb-bg opacity-30" />
          <div className="container relative max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> {t("blog.back")}
            </Link>
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-primary-foreground/70 mb-4">
              <span className="px-2.5 py-1 rounded-full bg-accent/20 text-accent font-mono">{tr(post.tag, lang)}</span>
              <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] text-balance">{tr(post.title, lang)}</h1>
          </div>
        </header>

        <section className="py-16">
          <div className="container max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/90">
            {tr(post.content, lang).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>
      </article>
      <SiteFooter />
    </div>
  );
};

export default BlogPost;
