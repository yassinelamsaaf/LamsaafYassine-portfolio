import { Mail, Phone } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const socials = [
    {
      label: "Email",
      value: "lamsaafyassine20@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=lamsaafyassine20@gmail.com",
      icon: Mail,
      target: "_blank",
    },
    {
      label: "Phone",
      value: "+212 6 55 24 10 37",
      href: "tel:+212655241037",
      icon: Phone,
    },
    {
      label: "LinkedIn",
      value: "yassine-lamsaaf",
      href: "https://www.linkedin.com/in/yassine-lamsaaf-9821462a8/",
      icon: "linkedin",
      target: "_blank",
    },
    {
      label: "GitHub",
      value: "yassinelamsaaf",
      href: "https://github.com/yassinelamsaaf",
      icon: "github",
      target: "_blank",
    },
  ];

  return (
    <section id="socials" className="py-24 scroll-mt-24">
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-4xl px-6">
          <header className="mb-12 text-center">
            <p className="text-sm font-medium text-blue-300">Connect</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s Connect
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-gray-400">
              Feel free to reach out — I&apos;m always open to new opportunities
              and conversations.
            </p>
          </header>

          <div className="grid gap-5 sm:grid-cols-2">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.target || undefined}
                rel={item.target === "_blank" ? "noreferrer" : undefined}
                className="group rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)]"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-black/30 text-blue-300 transition-all group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
                    {typeof item.icon === "string" ? (
                      item.icon === "github" ? (
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5 fill-current"
                          aria-hidden="true"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.24-.01-2.24-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.72.08-.72 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23A11.46 11.46 0 0 1 12 5.8c1.02 0 2.05.14 3.01.41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.92 1.24 3.23 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.23 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5 fill-current"
                          aria-hidden="true"
                        >
                          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6A2.5 2.5 0 0 1 0 3.5C0 2.12 1.12 1 2.49 1c1.38 0 2.49 1.12 2.49 2.5zM.5 8h4V24h-4V8zm7 0h3.83v2.18h.06c.53-1.01 1.84-2.18 3.79-2.18 4.05 0 4.8 2.67 4.8 6.13V24h-4v-7.63c0-1.82-.03-4.16-2.54-4.16-2.54 0-2.93 1.98-2.93 4.03V24h-4V8z" />
                        </svg>
                      )
                    ) : (
                      <item.icon className="h-5 w-5" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-blue-300">
                      {item.label}
                    </p>
                    <p className="mt-0.5 truncate text-sm text-gray-400 transition-colors group-hover:text-gray-200">
                      {item.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
