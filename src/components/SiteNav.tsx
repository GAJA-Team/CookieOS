import { Link } from "react-router-dom";
import { useState } from "react";
import { Cookie, Download, GitFork as Github, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import cookieLogo from "@/assets/cookie-logo.png";
import { useI18n } from "@/i18n/I18nContext";
import { LangToggle } from "@/components/LangToggle";
import { SocialLinks } from "@/components/SocialLinks";

export const SiteNav = () => {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  return (
  <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
    <div className="container flex items-center justify-between py-4">
      <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg sm:text-xl shrink-0">
        <img src={cookieLogo} alt="CookieOS logo" className="w-7 h-7 sm:w-8 sm:h-8" />
        CookieOS
      </Link>
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
        <Link to="/" className="hover:text-accent transition-colors">{t("nav.start")}</Link>
        <Link to="/download" className="hover:text-accent transition-colors">{t("nav.download")}</Link>
        <Link to="/blog" className="hover:text-accent transition-colors">{t("nav.blog")}</Link>
        <Link to="/docs" className="hover:text-accent transition-colors">{t("nav.docs")}</Link>
        <Link to="/community" className="hover:text-accent transition-colors">{t("nav.community")}</Link>
        <Link to="/about" className="hover:text-accent transition-colors">{t("nav.about")}</Link>
        <a
          href="https://github.com/GAJA-Team/cookieos"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent transition-colors inline-flex items-center gap-1.5"
        >
          <Github className="w-4 h-4" /> GitHub
        </a>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="hidden md:block"><SocialLinks compact /></div>
        <LangToggle />
        <Button asChild size="sm" className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
          <Link to="/#download"><Download className="w-4 h-4 mr-1.5" /> {t("nav.iso")}</Link>
        </Button>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </div>
    {open && (
      <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
        <div className="container py-4 flex flex-col gap-1 text-sm font-medium">
          <Link to="/" onClick={() => setOpen(false)} className="py-2.5 hover:text-accent transition-colors">{t("nav.start")}</Link>
          <Link to="/download" onClick={() => setOpen(false)} className="py-2.5 hover:text-accent transition-colors">{t("nav.download")}</Link>
          <Link to="/blog" onClick={() => setOpen(false)} className="py-2.5 hover:text-accent transition-colors">{t("nav.blog")}</Link>
          <Link to="/docs" onClick={() => setOpen(false)} className="py-2.5 hover:text-accent transition-colors">{t("nav.docs")}</Link>
          <Link to="/community" onClick={() => setOpen(false)} className="py-2.5 hover:text-accent transition-colors">{t("nav.community")}</Link>
          <Link to="/contributing" onClick={() => setOpen(false)} className="py-2.5 hover:text-accent transition-colors">{t("nav.contributing")}</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="py-2.5 hover:text-accent transition-colors">{t("nav.about")}</Link>
          <a href="https://github.com/GAJA-Team/cookieos" target="_blank" rel="noreferrer" className="py-2.5 hover:text-accent transition-colors inline-flex items-center gap-2"><Github className="w-4 h-4" /> GitHub</a>
          <Link to="/#download" onClick={() => setOpen(false)} className="sm:hidden py-2.5 hover:text-accent transition-colors inline-flex items-center gap-2"><Download className="w-4 h-4" /> {t("nav.iso")}</Link>
          <div className="pt-3"><SocialLinks compact /></div>
        </div>
      </div>
    )}
  </nav>
  );
};

export const SiteFooter = () => {
  const { t } = useI18n();
  return (
  <footer className="bg-[hsl(var(--cookie-burnt))] text-primary-foreground/70 py-12">
    <div className="container flex flex-col md:flex-row md:flex-wrap items-center justify-between gap-6 text-sm text-center md:text-left">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Cookie className="w-5 h-5 text-accent" strokeWidth={2.5} />
        <span className="font-display font-bold text-primary-foreground">CookieOS</span>
        <span className="text-primary-foreground/40">{t("footer.tagline")}</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <Link to="/docs" className="hover:text-accent transition-colors">{t("nav.docs")}</Link>
        <Link to="/blog" className="hover:text-accent transition-colors">{t("nav.blog")}</Link>
        <a href="https://github.com/GAJA-Team/cookieos" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
      </div>
      <SocialLinks />
    </div>
  </footer>
  );
};
