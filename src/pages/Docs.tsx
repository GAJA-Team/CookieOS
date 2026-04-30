import { useState } from "react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { Book, Download, Settings, Terminal as TerminalIcon, HelpCircle, AlertTriangle, ArrowUpCircle, Palette, Cpu, Heart } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import type { Lang } from "@/i18n/dict";

const buildSections = (lang: Lang, t: (k: any) => string) => {
  const isPL = lang === "pl";
  return [
    {
      id: "start",
      icon: Book,
      title: t("docs.s.start"),
      body: isPL ? (
        <>
          <p>Witaj w CookieOS! To dystrybucja Debiana z ciasteczkowym charakterem. Aby zacząć:</p>
          <ol className="list-decimal pl-6 space-y-1.5">
            <li>Pobierz ISO ze strony głównej (wersja 1.0 „Genesis”, amd64).</li>
            <li>Wgraj obraz na pendrive narzędziem typu Rufus, balenaEtcher lub <code>dd</code>.</li>
            <li>Uruchom komputer z pendrive'a i postępuj zgodnie z instrukcją instalatora.</li>
            <li>Po instalacji powita Cię <strong>CookieOS Welcome</strong> — przewodnik krok po kroku.</li>
          </ol>
        </>
      ) : (
        <>
          <p>Welcome to CookieOS! It's a Debian distribution with a cookie-flavored character. To get started:</p>
          <ol className="list-decimal pl-6 space-y-1.5">
            <li>Download the ISO from the home page (version 1.0 "Genesis", amd64).</li>
            <li>Flash the image to a USB stick using a tool like Rufus, balenaEtcher or <code>dd</code>.</li>
            <li>Boot from the USB stick and follow the installer instructions.</li>
            <li>After installation, <strong>CookieOS Welcome</strong> will greet you with a step-by-step guide.</li>
          </ol>
        </>
      ),
    },
    {
      id: "install",
      icon: Download,
      title: t("docs.s.install"),
      body: isPL ? (
        <>
          <p>Minimalne wymagania: 1 GB RAM, 20 GB dysku, łącze sieciowe. Zalecane: 2 GB RAM i 60 GB dysku.</p>
          <p>Instalator prowadzi przez wybór języka, partycjonowanie, konto użytkownika i hasło. Cała instalacja zajmuje ok. 10–20 minut w zależności od sprzętu.</p>
        </>
      ) : (
        <>
          <p>Minimum requirements: 1 GB RAM, 20 GB disk, network connection. Recommended: 2 GB RAM and 60 GB disk.</p>
          <p>The installer walks you through language selection, partitioning, user account and password. The whole install takes around 10–20 minutes depending on hardware.</p>
        </>
      ),
    },
    {
      id: "tools",
      icon: Settings,
      title: t("docs.s.tools"),
      body: isPL ? (
        <ul className="space-y-2">
          <li><strong>CookieOS Updater</strong> — aktualizacje systemu i pakietów.</li>
          <li><strong>CookieOS Customizer</strong> — motywy, ikony, kursory, tapety.</li>
          <li><strong>CookieOS Accessories</strong> — drobne narzędzia codziennego użytku.</li>
          <li><strong>CookieOS Welcome</strong> — przewodnik powitalny po instalacji.</li>
          <li><strong>CookieOS Center</strong> — centralne ustawienia systemu.</li>
        </ul>
      ) : (
        <ul className="space-y-2">
          <li><strong>CookieOS Updater</strong> — system and package updates.</li>
          <li><strong>CookieOS Customizer</strong> — themes, icons, cursors, wallpapers.</li>
          <li><strong>CookieOS Accessories</strong> — small everyday utilities.</li>
          <li><strong>CookieOS Welcome</strong> — post-install welcome guide.</li>
          <li><strong>CookieOS Center</strong> — central system settings.</li>
        </ul>
      ),
    },
    {
      id: "cli",
      icon: TerminalIcon,
      title: t("docs.s.cli"),
      body: isPL ? (
        <>
          <p>CookieOS bazuje na Debianie, więc używasz standardowo <code>apt</code>:</p>
          <pre className="bg-[hsl(var(--cookie-burnt))] text-primary-foreground p-4 rounded-xl overflow-x-auto text-sm font-mono">sudo apt update{"\n"}sudo apt upgrade{"\n"}sudo apt install &lt;pakiet&gt;</pre>
        </>
      ) : (
        <>
          <p>CookieOS is based on Debian, so you use <code>apt</code> as usual:</p>
          <pre className="bg-[hsl(var(--cookie-burnt))] text-primary-foreground p-4 rounded-xl overflow-x-auto text-sm font-mono">sudo apt update{"\n"}sudo apt upgrade{"\n"}sudo apt install &lt;package&gt;</pre>
        </>
      ),
    },
    {
      id: "faq",
      icon: HelpCircle,
      title: t("docs.s.faq"),
      body: isPL ? (
        <>
          <p><strong>Czy będzie wersja i386?</strong> Tak, jest w drodze.</p>
          <p><strong>Czy mogę używać repozytoriów Debiana?</strong> Tak, są w pełni kompatybilne.</p>
          <p><strong>Gdzie zgłaszać błędy?</strong> Na GitHubie: <a className="text-accent underline" href="https://github.com/GAJA-Team/cookieos" target="_blank" rel="noreferrer">GAJA-Team/cookieos</a>.</p>
        </>
      ) : (
        <>
          <p><strong>Will there be an i386 version?</strong> Yes, it's on the way.</p>
          <p><strong>Can I use Debian repositories?</strong> Yes, they are fully compatible.</p>
          <p><strong>Where do I report bugs?</strong> On GitHub: <a className="text-accent underline" href="https://github.com/GAJA-Team/cookieos" target="_blank" rel="noreferrer">GAJA-Team/cookieos</a>.</p>
        </>
      ),
    },
    {
      id: "troubleshoot",
      icon: AlertTriangle,
      title: t("docs.s.troubleshoot"),
      body: isPL ? (
        <>
          <p><strong>System nie startuje z USB:</strong> sprawdź sumę SHA256 i wgraj obraz ponownie balenaEtcherem.</p>
          <p><strong>Brak Wi-Fi po instalacji:</strong> zainstaluj <code>firmware-iwlwifi</code> lub odpowiedni pakiet firmware dla swojej karty.</p>
          <p><strong>Czarny ekran po starcie:</strong> dodaj <code>nomodeset</code> do parametrów jądra w GRUB-ie.</p>
        </>
      ) : (
        <>
          <p><strong>System won't boot from USB:</strong> verify the SHA256 sum and reflash with balenaEtcher.</p>
          <p><strong>No Wi-Fi after install:</strong> install <code>firmware-iwlwifi</code> or the firmware package matching your card.</p>
          <p><strong>Black screen on boot:</strong> add <code>nomodeset</code> to the kernel parameters in GRUB.</p>
        </>
      ),
    },
    {
      id: "upgrade",
      icon: ArrowUpCircle,
      title: t("docs.s.upgrade"),
      body: isPL ? (
        <>
          <p>Aktualizacje wykonujesz przez CookieOS Updater lub z terminala:</p>
          <pre className="bg-[hsl(var(--cookie-burnt))] text-primary-foreground p-4 rounded-xl overflow-x-auto text-sm font-mono">sudo apt update{"\n"}sudo apt full-upgrade</pre>
          <p>Pomiędzy wydaniami głównymi (np. 1.0 → 2.0) używaj narzędzia <code>cookieos-release-upgrade</code>.</p>
        </>
      ) : (
        <>
          <p>Run updates through CookieOS Updater or from the terminal:</p>
          <pre className="bg-[hsl(var(--cookie-burnt))] text-primary-foreground p-4 rounded-xl overflow-x-auto text-sm font-mono">sudo apt update{"\n"}sudo apt full-upgrade</pre>
          <p>For major version jumps (e.g. 1.0 → 2.0) use the <code>cookieos-release-upgrade</code> tool.</p>
        </>
      ),
    },
    {
      id: "themes",
      icon: Palette,
      title: t("docs.s.themes"),
      body: isPL ? (
        <>
          <p>Otwórz CookieOS Customizer (skrót <code>Super + T</code>). Wybierasz tam motyw GTK, ikony, kursory, czcionki i akcent kolorystyczny.</p>
          <p>Motywy społeczności znajdziesz na <a className="text-accent underline" href="https://github.com/GAJA-Team/cookieos-themes" target="_blank" rel="noreferrer">GitHubie</a>.</p>
        </>
      ) : (
        <>
          <p>Open CookieOS Customizer (shortcut <code>Super + T</code>). From there pick a GTK theme, icons, cursors, fonts and the accent color.</p>
          <p>Community themes live on <a className="text-accent underline" href="https://github.com/GAJA-Team/cookieos-themes" target="_blank" rel="noreferrer">GitHub</a>.</p>
        </>
      ),
    },
    {
      id: "drivers",
      icon: Cpu,
      title: t("docs.s.drivers"),
      body: isPL ? (
        <>
          <p>NVIDIA: zainstaluj <code>nvidia-driver</code> z repozytorium non-free.</p>
          <p>AMD/Intel: sterowniki działają out-of-the-box dzięki Mesa.</p>
          <p>Drukarki: <code>sudo apt install cups system-config-printer</code>.</p>
        </>
      ) : (
        <>
          <p>NVIDIA: install <code>nvidia-driver</code> from the non-free repository.</p>
          <p>AMD/Intel: drivers work out of the box thanks to Mesa.</p>
          <p>Printers: <code>sudo apt install cups system-config-printer</code>.</p>
        </>
      ),
    },
    {
      id: "contribute",
      icon: Heart,
      title: t("docs.s.contribute"),
      body: isPL ? (
        <>
          <p>Każda pomoc się liczy. Zerknij na stronę <a className="text-accent underline" href="/contributing">Współtwórz</a>, gdzie opisaliśmy główne ścieżki.</p>
          <p>Pull requesty wysyłaj do <a className="text-accent underline" href="https://github.com/GAJA-Team/cookieos" target="_blank" rel="noreferrer">GAJA-Team/cookieos</a>.</p>
        </>
      ) : (
        <>
          <p>Every bit of help counts. See the <a className="text-accent underline" href="/contributing">Contribute</a> page for the main paths.</p>
          <p>Send pull requests to <a className="text-accent underline" href="https://github.com/GAJA-Team/cookieos" target="_blank" rel="noreferrer">GAJA-Team/cookieos</a>.</p>
        </>
      ),
    },
  ];
};

const Docs = () => {
  const { t, lang } = useI18n();
  const sections = buildSections(lang, t);
  const [active, setActive] = useState(sections[0].id);
  const current = sections.find((s) => s.id === active)!;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="pt-32 pb-12 bg-dough-gradient">
        <div className="container">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">{t("docs.eyebrow")}</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 text-balance">{t("docs.title")}</h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">{t("docs.subtitle")}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid lg:grid-cols-[260px_1fr] gap-10">
          <aside className="lg:sticky lg:top-24 self-start">
            <nav className="flex lg:flex-col gap-1 overflow-x-auto">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium text-left whitespace-nowrap transition-colors ${
                    active === s.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-foreground"
                  }`}
                >
                  <s.icon className="w-4 h-4" /> {s.title}
                </button>
              ))}
            </nav>
          </aside>

          <article className="bg-card border border-border rounded-3xl p-8 md:p-10 prose-cookie">
            <h2 className="font-display text-3xl font-bold mb-6 flex items-center gap-3">
              <current.icon className="w-7 h-7 text-accent" /> {current.title}
            </h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono">
              {current.body}
            </div>
          </article>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Docs;
