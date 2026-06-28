import { Mail, Moon, Sun, X } from "lucide-react";

export const MobileMenu = ({ menuOpen, setMenuOpen, theme, onToggleTheme }) => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#extracurricular", label: "Extracurricular" },
    { href: "#socials", label: "Socials" },
  ];

  return (
    <div
        className={`fixed inset-0 z-50 md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-blue-950/35 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu overlay"
        />

        <aside
          className={`absolute right-0 top-0 flex h-full w-[84vw] max-w-sm flex-col border-l border-blue-400/15 bg-[var(--bg-modal)]/90 px-5 py-6 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-200)]">
              Menu
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="grid h-9 w-9 place-items-center rounded-xl border border-blue-400/20 bg-[var(--bg-card-solid)] text-[var(--tx-secondary)] transition hover:border-blue-300/50 hover:text-[var(--tx-primary)]"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <a
              href="https://github.com/yassinelamsaaf"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-xl border border-blue-400/20 bg-[var(--bg-card-solid)] text-[var(--tx-secondary)] transition hover:border-blue-300/50 hover:text-[var(--tx-primary)]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.24-.01-2.24-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.72.08-.72 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23A11.46 11.46 0 0 1 12 5.8c1.02 0 2.05.14 3.01.41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.92 1.24 3.23 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.23 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/yassine-lamsaaf-9821462a8/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-xl border border-blue-400/20 bg-[var(--bg-card-solid)] text-[var(--tx-secondary)] transition hover:border-blue-300/50 hover:text-[var(--tx-primary)]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6A2.5 2.5 0 0 1 0 3.5C0 2.12 1.12 1 2.49 1c1.38 0 2.49 1.12 2.49 2.5zM.5 8h4V24h-4V8zm7 0h3.83v2.18h.06c.53-1.01 1.84-2.18 3.79-2.18 4.05 0 4.8 2.67 4.8 6.13V24h-4v-7.63c0-1.82-.03-4.16-2.54-4.16-2.54 0-2.93 1.98-2.93 4.03V24h-4V8z" />
              </svg>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lamsaafyassine20@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-xl border border-blue-400/20 bg-[var(--bg-card-solid)] text-[var(--tx-secondary)] transition hover:border-blue-300/50 hover:text-[var(--tx-primary)]"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-xl border border-blue-400/20 bg-[var(--bg-card-solid)] text-[var(--tx-secondary)] transition hover:border-blue-300/50 hover:text-[var(--tx-primary)]"
            >
              {theme === "dark" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-blue-400/15 bg-[var(--bg-card)] px-4 py-4 text-lg font-medium text-[var(--tx-primary)] transition hover:border-blue-300/30 hover:bg-[var(--bg-card-heavy)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </aside>
    </div>
  );
};
