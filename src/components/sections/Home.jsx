import { RevealOnScroll } from "../RevealOnScroll";
import { assetUrl } from "../../lib/assetUrl";
import { ProfilePhoto3D } from "../ProfilePhoto3D";

export const Home = () => {
  const cvUrl = assetUrl("cv.pdf");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 sm:pt-24 md:pt-28"
    >
      <RevealOnScroll>
        <div className="w-full px-4">
          <div className="flex flex-col-reverse items-center justify-between gap-10 text-center sm:flex-row sm:text-left sm:items-center">
            <div className="z-10 w-full sm:flex-1">
              <h1 className="mt-2 text-4xl font-bold leading-tight text-[var(--tx-primary)] sm:text-5xl md:text-6xl">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Lamsaaf Yassine
                </span>
              </h1>
              <p className="text-sm font-medium text-[var(--accent-300)]">
                Software Engineering Student
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--tx-muted)] sm:text-lg">
                I build clean, reliable web apps and I care about{" "}
                <span className="text-[var(--accent-200)]">performance</span>,{" "}
                <span className="text-[var(--accent-200)]">scalability</span>, and{" "}
                <span className="text-[var(--accent-200)]">detail</span>. I enjoy solving
                complex problems, exploring new technologies, and continuously
                improving my skills.
              </p>

              <div className="mt-15 flex flex-col flex-wrap justify-center gap-3 sm:flex-row sm:justify-start">
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-[var(--bd-strong)] bg-[var(--bg-card)] px-5 py-3 font-medium text-[var(--tx-primary)] transition hover:border-blue-500/20 hover:bg-[var(--bg-card-heavy)]"
                >
                  Download CV
                </a>
                <a
                  href="#projects"
                  className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_18px_rgba(59,130,246,0.25)]"
                >
                  View Projects
                </a>

                <a
                  href="#socials"
                  className="rounded-xl border border-[var(--bd-strong)] bg-[var(--bg-card)] px-5 py-3 font-medium text-[var(--tx-primary)] transition hover:border-blue-500/20 hover:bg-[var(--bg-card-heavy)]"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="mt-10 w-full max-w-sm sm:mt-0 sm:w-[320px] sm:max-w-md sm:flex-shrink-0 md:w-[380px]">
              <ProfilePhoto3D
                src="picofme.png"
                fallbackAlt="Portrait of Lamsaaf Yassine"
                className="shadow-[0_0_22px_rgba(59,130,246,0.12)]"
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
