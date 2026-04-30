export const SocialLinks = ({ compact = false }: { compact?: boolean }) => {
  const linkClass = compact
    ? "w-8 h-8 rounded-full flex items-center justify-center hover:text-accent hover:bg-accent/10 transition-colors"
    : "w-9 h-9 rounded-full border border-current/20 flex items-center justify-center hover:text-accent hover:border-accent transition-colors";
  return (
  <div className="flex items-center gap-1">
    <a
      href="https://instagram.com/cookieos"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
      className={linkClass}
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    </a>
    <a
      href="https://discord.gg/cookieos"
      target="_blank"
      rel="noreferrer"
      aria-label="Discord"
      className={linkClass}
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3c-.21.375-.45.88-.616 1.28a18.27 18.27 0 0 0-5.487 0A12.6 12.6 0 0 0 9.83 3a19.74 19.74 0 0 0-3.76 1.37C2.4 9.79 1.4 15.06 1.9 20.27a19.93 19.93 0 0 0 6.06 3.05c.49-.66.93-1.36 1.3-2.1-.71-.27-1.39-.6-2.04-.99.17-.13.34-.26.5-.4 3.93 1.83 8.18 1.83 12.07 0 .17.14.33.27.5.4-.65.39-1.33.72-2.04.99.37.74.81 1.44 1.3 2.1a19.86 19.86 0 0 0 6.06-3.05c.6-6.06-1-11.28-3.29-15.9zM9.07 16.62c-1.18 0-2.16-1.08-2.16-2.4 0-1.32.96-2.4 2.16-2.4 1.21 0 2.18 1.09 2.16 2.4 0 1.32-.96 2.4-2.16 2.4zm5.86 0c-1.18 0-2.16-1.08-2.16-2.4 0-1.32.96-2.4 2.16-2.4 1.21 0 2.18 1.09 2.16 2.4 0 1.32-.95 2.4-2.16 2.4z" />
      </svg>
    </a>
    <a
      href="https://tiktok.com/@cookieos"
      target="_blank"
      rel="noreferrer"
      aria-label="TikTok"
      className={linkClass}
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.55a8.16 8.16 0 0 0 4.77 1.52V7.62a4.85 4.85 0 0 1-1.84-.93z" />
      </svg>
    </a>
    <a
      href="https://x.com/cookieos"
      target="_blank"
      rel="noreferrer"
      aria-label="X"
      className={linkClass}
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2H21l-6.52 7.45L22 22h-6.78l-4.78-6.27L4.8 22H2.05l6.98-7.97L2 2h6.91l4.32 5.72L18.244 2zm-2.38 18h1.84L7.22 4H5.27l10.59 16z" />
      </svg>
    </a>
  </div>
  );
};