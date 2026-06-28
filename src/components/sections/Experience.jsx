import {
  BriefcaseBusiness,
  Building2,
  CalendarRange,
  MapPin,
} from "lucide-react";

import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  const items = [
    {
      title: "INTERNSHIP – FULL STACK DEVELOPER",
      org: "B2BLink (SmartAlert)",
      location: "Remote",
      dates: "Jul. 2025 – Aug. 2025",
      summary:
        "Contributed to upgrading SmartAlert, a personalized alert solution for automotive offers.",
      accomplishments: [
        "Implemented multi-channel authentication (email, phone, Google, Facebook), a multilingual chatbot (FR/AR), and user profile customization with account settings.",
      ],
      technologies: [
        "Spring Boot",
        "REST APIs",
        "React",
        "React Native",
        "Git/GitHub",
        "Agile/Scrum",
      ],
      link: "https://smartalert.ma/",
    },
    {
      title: "Development & Design Team Member",
      org: "INE Alumni",
      location: "Remote",
      dates: "Jul. 2025 - Present",
      summary:
        "Contributing remotely as a Development & Design Team Member to support platform quality and delivery.",
      accomplishments: [
        "Contributed to building an alumni-student networking platform (directory, job offers, events) alongside professional alumni, focusing on code quality and best practices.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security (JWT)",
        "JPA/Hibernate",
        "PostgreSQL",
        "Maven",
        "Docker",
        "React (Vite)",
        "Tailwind CSS",
      ],
      link: "https://www.linkedin.com/company/ine-alumni/",
    },
  ];

  return (
    <section id="experience" className="py-24 scroll-mt-24">
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-6xl px-6">
          <header className="mb-10 text-center">
            <p className="text-sm font-medium text-[var(--accent-300)]">Career</p>
            <h2 className="mt-2 text-3xl font-bold text-[var(--tx-primary)] sm:text-4xl">
              Professional Experiences
            </h2>
          </header>

          <div className="rounded-2xl border border-[var(--bd-card)] bg-[var(--bg-section)] p-8 backdrop-blur-md">
            <ol className="relative space-y-6">
              {items.map((item) => (
                <li
                  key={`${item.title}-${item.org}`}
                  className="relative rounded-2xl border border-[var(--bd-card)] bg-[var(--bg-card)] p-6 transition-all hover:-translate-y-0.5 hover:border-blue-500/20 hover:shadow-[0_2px_10px_rgba(59,130,246,0.12)]"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-[var(--tx-primary)]">
                        {item.org}
                      </p>
                      <p className="mt-1 text-sm font-medium text-[var(--accent-300)]">
                        {item.title}
                      </p>
                      <div className="mt-1 flex flex-col gap-2 text-sm text-[var(--tx-muted)] sm:flex-row sm:items-center sm:gap-4">
                        <span className="inline-flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-[var(--accent-200)]" />
                          {item.org}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[var(--accent-200)]" />
                          {item.location}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <CalendarRange className="h-4 w-4 text-[var(--accent-200)]" />
                          {item.dates}
                        </span>
                      </div>
                    </div>

                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--bd-card)] bg-[var(--bg-card)]">
                      <BriefcaseBusiness className="h-5 w-5 text-[var(--accent-200)]" />
                    </div>
                  </div>

                  <div className="mt-5 space-y-5 text-sm text-[var(--tx-muted)]">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-[var(--accent-300)]">
                        What ?
                      </h4>
                      <p className="leading-relaxed text-[var(--tx-muted)]">{item.summary}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-[var(--accent-300)]">
                       Accomplished
                      </h4>
                        <ul className="list-disc space-y-2 pl-5 text-[var(--tx-muted)]">
                        {item.accomplishments.map((achievement) => (
                          <li key={achievement}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-[var(--accent-300)]">
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-[var(--bd-card)] bg-[var(--bg-card)] px-3 py-1 text-xs text-[var(--tx-tertiary)] transition-all hover:-translate-y-0.5 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.12)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end pt-2 border-t border-[var(--bd-card)]">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-[var(--accent-400)] transition hover:text-[var(--accent-300)]"
                      >
                        view {">>>"}
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
