import type { Lang } from "@/i18n/dict";

type Localized = { pl: string; en: string };
type LocalizedArr = { pl: string[]; en: string[] };

export type Category = "release" | "devlog" | "community" | "tutorial";

export const categories: { id: Category; label: Localized }[] = [
  { id: "release", label: { pl: "Wydania", en: "Releases" } },
  { id: "devlog", label: { pl: "Dev log", en: "Dev log" } },
  { id: "community", label: { pl: "Społeczność", en: "Community" } },
  { id: "tutorial", label: { pl: "Poradniki", en: "Tutorials" } },
];

export type Post = {
  slug: string;
  date: string;
  category: Category;
  tag: Localized;
  title: Localized;
  excerpt: Localized;
  content: LocalizedArr;
};

export const posts: Post[] = [
  {
    slug: "cookieos-1-0-genesis",
    date: "2026-04-30",
    category: "release",
    tag: { pl: "Release", en: "Release" },
    title: {
      pl: "CookieOS 1.0 „Genesis” wychodzi z pieca",
      en: 'CookieOS 1.0 "Genesis" is out of the oven',
    },
    excerpt: {
      pl: "Pierwsze pełne wydanie. ISO amd64 jest już dostępne, i386 piecze się w tle.",
      en: "The first full release. The amd64 ISO is ready; i386 is still baking.",
    },
    content: {
      pl: [
        "Po miesiącach pracy z radością ogłaszamy CookieOS 1.0 „Genesis” — pierwsze stabilne wydanie naszej ciasteczkowej dystrybucji Debiana.",
        "W tej wersji znajdziesz komplet narzędzi: CookieOS Updater, Customizer, Accessories, Welcome oraz Center.",
        "ISO dla amd64 jest już do pobrania ze strony głównej. Wersja i386 jest w drodze.",
        "Dziękujemy społeczności GAJA-Team i wszystkim testerom — bez Was tych ciasteczek by nie było.",
      ],
      en: [
        'After months of work we are excited to announce CookieOS 1.0 "Genesis" — the first stable release of our cookie-flavored Debian distribution.',
        "This version ships the full toolkit: CookieOS Updater, Customizer, Accessories, Welcome, and Center.",
        "The amd64 ISO is already available on the home page. The i386 build is on its way.",
        "Huge thanks to the GAJA-Team community and every tester — without you these cookies would not exist.",
      ],
    },
  },
  {
    slug: "jak-powstal-customizer",
    date: "2026-04-22",
    category: "devlog",
    tag: { pl: "Dev log", en: "Dev log" },
    title: {
      pl: "Jak powstał CookieOS Customizer",
      en: "How CookieOS Customizer was made",
    },
    excerpt: {
      pl: "Krótka historia: od pomysłu na motywy po pełen panel personalizacji systemu.",
      en: "A short story: from a theme idea to a full system personalization panel.",
    },
    content: {
      pl: [
        "Customizer zaczął się od prostego pytania: dlaczego zmiana motywu w Linuksie ma być trudna?",
        "Pierwsza wersja obsługiwała tylko tapety. Dziś pozwala zmieniać motywy GTK, ikony, kursory, czcionki i akcent kolorystyczny.",
        "Pod spodem to cienka warstwa nad standardowymi narzędziami Debiana, więc każda zmiana jest w pełni kompatybilna.",
      ],
      en: [
        "Customizer started with a simple question: why does changing a theme on Linux have to be hard?",
        "The first version only handled wallpapers. Today it lets you swap GTK themes, icons, cursors, fonts and the accent color.",
        "Under the hood it is a thin layer over standard Debian tooling, so every change stays fully compatible.",
      ],
    },
  },
  {
    slug: "dolacz-do-gaja-team",
    date: "2026-04-10",
    category: "community",
    tag: { pl: "Społeczność", en: "Community" },
    title: {
      pl: "Dołącz do GAJA-Team na GitHubie",
      en: "Join GAJA-Team on GitHub",
    },
    excerpt: {
      pl: "Otwieramy repozytorium i zapraszamy do współtworzenia kolejnych smaków.",
      en: "The repository is open and we are inviting you to help bake the next flavors.",
    },
    content: {
      pl: [
        "CookieOS jest otwarty od pierwszego commita. Repozytorium znajdziesz pod adresem github.com/GAJA-Team/cookieos.",
        "Szukamy ludzi do testowania, tłumaczeń, dokumentacji i kodu. Każdy okruszek się liczy.",
        "Zajrzyj do issues, wybierz coś z etykietą „good first crumb” i upiecz z nami coś dobrego.",
      ],
      en: [
        "CookieOS has been open since the very first commit. You can find the repo at github.com/GAJA-Team/cookieos.",
        "We are looking for testers, translators, doc writers and coders. Every crumb counts.",
        'Browse the issues, grab one tagged "good first crumb" and bake something great with us.',
      ],
    },
  },
  {
    slug: "instalacja-cookieos-krok-po-kroku",
    date: "2026-04-05",
    category: "tutorial",
    tag: { pl: "Poradnik", en: "Tutorial" },
    title: {
      pl: "Instalacja CookieOS krok po kroku",
      en: "Installing CookieOS step by step",
    },
    excerpt: {
      pl: "Od pobrania ISO po pierwszy login — kompletny przewodnik dla początkujących.",
      en: "From downloading the ISO to your first login — a complete beginner's guide.",
    },
    content: {
      pl: [
        "1. Pobierz ISO ze strony /download i zweryfikuj sumę SHA256.",
        "2. Użyj balenaEtcher lub komendy `dd` aby wgrać obraz na pendrive (min. 4 GB).",
        "3. Uruchom komputer z pendrive'a — wybierz opcję „Install CookieOS”.",
        "4. Przejdź przez instalator: język, partycje, użytkownik, hasło. To około 15 minut.",
        "5. Po pierwszym logowaniu uruchomi się CookieOS Welcome — przewodnik wprowadzający.",
      ],
      en: [
        "1. Download the ISO from /download and verify its SHA256 checksum.",
        "2. Use balenaEtcher or the `dd` command to flash the image onto a USB stick (4 GB minimum).",
        "3. Boot from the USB stick — pick the \"Install CookieOS\" option.",
        "4. Walk through the installer: language, partitions, user, password. Around 15 minutes total.",
        "5. After your first login, CookieOS Welcome will launch as an intro guide.",
      ],
    },
  },
  {
    slug: "5-tipow-cookieos-customizer",
    date: "2026-03-28",
    category: "tutorial",
    tag: { pl: "Poradnik", en: "Tutorial" },
    title: {
      pl: "5 tipów na Customizera, których nie znasz",
      en: "5 Customizer tips you didn't know",
    },
    excerpt: {
      pl: "Skróty, ukryte motywy i triki, które przyspieszą personalizację.",
      en: "Shortcuts, hidden themes and tricks that speed up personalization.",
    },
    content: {
      pl: [
        "Customizer ma kilka mniej oczywistych funkcji — oto pięć ulubionych.",
        "1. Tryb daltonisty: ustawienia → dostępność → adaptacja kolorów.",
        "2. Eksport motywu do pliku .cookie i import na innym komputerze.",
        "3. Skrót Ctrl+Shift+C otwiera szybki podgląd motywu.",
        "4. Synchronizacja motywów między urządzeniami przez konto GitHub.",
        "5. Ukryty motyw „Dark Chocolate” odblokowywany przez wpisanie konami code.",
      ],
      en: [
        "Customizer has a few less obvious features — here are five favorites.",
        "1. Color blindness mode: settings → accessibility → color adaptation.",
        "2. Export a theme to a .cookie file and import it on another machine.",
        "3. Shortcut Ctrl+Shift+C opens a quick theme preview.",
        "4. Theme sync across devices via your GitHub account.",
        "5. A hidden \"Dark Chocolate\" theme unlocked by typing the konami code.",
      ],
    },
  },
  {
    slug: "wywiad-z-zespolem-gaja",
    date: "2026-03-15",
    category: "community",
    tag: { pl: "Wywiad", en: "Interview" },
    title: {
      pl: "Wywiad z zespołem GAJA-Team",
      en: "Interview with the GAJA-Team",
    },
    excerpt: {
      pl: "Skąd pomysł na ciasteczkową dystrybucję i jak wygląda praca w zespole.",
      en: "Where the cookie-flavored distro idea came from and how the team works.",
    },
    content: {
      pl: [
        "Zespół GAJA-Team to czworo entuzjastów open source z Polski.",
        "Wszystko zaczęło się od żartu na Discordzie, że Linux mógłby być „bardziej miły dla oka”.",
        "Trzy lata później mamy stabilne wydanie 1.0 i społeczność 12 tysięcy użytkowników.",
      ],
      en: [
        "GAJA-Team is four open source enthusiasts from Poland.",
        "It all started as a Discord joke that Linux could be \"a bit easier on the eyes\".",
        "Three years later we have a stable 1.0 release and a community of 12,000 users.",
      ],
    },
  },
];

export const tr = <T,>(field: { pl: T; en: T }, lang: Lang): T => field[lang] ?? field.pl;
