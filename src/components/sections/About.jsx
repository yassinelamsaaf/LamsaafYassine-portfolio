import { useEffect, useRef, useState } from "react";

import {
  CalendarRange,
  GraduationCap,
  MapPin,
  NotebookText,
} from "lucide-react";

import { assetUrl } from "../../lib/assetUrl";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const [activeSkillGroupIdx, setActiveSkillGroupIdx] = useState(0);
  const [isDraggingSkills, setIsDraggingSkills] = useState(false);
  const [isSkillsHovered, setIsSkillsHovered] = useState(false);
  const [skillsDragDelta, setSkillsDragDelta] = useState(0);
  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    pointerId: null,
  });

  const technicalSkillGroups = [
    {
      title: "Languages",
      items: ["Java", "JavaScript", "TypeScript", "Python", "C", "C++"],
    },
    {
      title: "Frontend",
      items: [
        "HTML5",
        "CSS3",
        "React",
        "Next.js",
        "Angular",
        "Tailwind CSS",
        "Three.js",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "Spring Boot",
        "NestJS",
        "Next.js (API Routes)",
      ],
    },
    {
      title: "Databases",
      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Firebase",
        "Supabase",
      ],
    },
    {
      title: "DevOps & Tools",
      items: [
        "Docker",
        "Kubernetes",
        "Argo CD",
        "GitHub Actions",
        "Git/GitHub",
        "Linux",
        "Maven",
      ],
    },
    {
      title: "Practices",
      items: [
        "CI/CD",
        "GitOps",
        "REST APIs",
        "Microservices",
        "Distributed Systems",
        "Agile/Scrum",
      ],
    },
    {
      title: "Soft Skills",
      items: [
        "Project Management",
        "Public Speaking",
        "Team Leadership",
        "Collaboration",
      ],
    },
  ];

  // const getSkillIcon = (skillName) => {
  //   const name = skillName.toLowerCase();

  //   if (name.includes("html")) return "images/html.png";
  //   if (name.includes("css")) return "images/css.png";
  //   if (name.includes("javascript")) return "images/javascript.png";
  //   if (name.includes("typescript")) return "images/typescript.png";
  //   if (name.includes("react")) return "images/react.png";
  //   if (name.includes("tailwind")) return "images/tailwind.png";
  //   if (name.includes("spring")) return "images/springboot.png";
  //   if (name.includes("node")) return "images/nodejs.png";
  //   if (name.includes("express")) return "images/expressjs.png";
  //   if (name.includes("java")) return "images/java.png";
  //   if (name.includes("postgres")) return "images/postgresql.png";
  //   if (name.includes("mongo")) return "images/mongodb.png";

  //   return "images/react.png";
  // };

  const education = [
    {
      school: "Institut National des Postes et Télécommunications (INPT)",
      location: "Rabat, Morocco",
      degree: "Engineering Degree, Software Engineering",
      dates: "Sep. 2024 – Jun. 2027",
      courses:
        "Algorithms, Networks, Security, Software Development, Cloud Computing, Databases, Agile.",
    },
    {
      school: "FSTG Marrakech – Faculté des Sciences et Techniques",
      location: "Marrakech, Morocco",
      degree: "DEUST in MIPC (maths, informatique, physique, chimie)",
      dates: "Sep. 2022 – Jul. 2024",
      courses: null,
    },
  ];

  const skillGroupCount = technicalSkillGroups.length;
  const autoSlideMs = 1900;
  const swipeThreshold = 90;

  const getRelativeSkillOffset = (idx) => {
    let offset = idx - activeSkillGroupIdx;

    if (offset > skillGroupCount / 2) offset -= skillGroupCount;
    if (offset < -skillGroupCount / 2) offset += skillGroupCount;

    return offset;
  };

  const moveSkillsNext = () => {
    setActiveSkillGroupIdx((prev) => (prev + 1) % skillGroupCount);
  };

  const moveSkillsPrev = () => {
    setActiveSkillGroupIdx(
      (prev) => (prev - 1 + skillGroupCount) % skillGroupCount,
    );
  };

  useEffect(() => {
    if (isDraggingSkills || isSkillsHovered) return undefined;

    const timer = window.setInterval(() => {
      setActiveSkillGroupIdx((prev) => (prev + 1) % skillGroupCount);
    }, autoSlideMs);

    return () => {
      window.clearInterval(timer);
    };
  }, [isDraggingSkills, isSkillsHovered, skillGroupCount, autoSlideMs]);

  const onSkillsPointerDown = (e) => {
    dragStateRef.current = {
      isDragging: true,
      startX: e.clientX,
      pointerId: e.pointerId,
    };
    setIsDraggingSkills(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onSkillsPointerMove = (e) => {
    if (!dragStateRef.current.isDragging) return;
    setSkillsDragDelta(e.clientX - dragStateRef.current.startX);
  };

  const finishSkillsDrag = (e) => {
    if (!dragStateRef.current.isDragging) return;

    const delta = e.clientX - dragStateRef.current.startX;
    if (delta <= -swipeThreshold) {
      moveSkillsNext();
    } else if (delta >= swipeThreshold) {
      moveSkillsPrev();
    }

    dragStateRef.current = { isDragging: false, startX: 0, pointerId: null };
    setSkillsDragDelta(0);
    setIsDraggingSkills(false);

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <section id="about" className="py-24 scroll-mt-24">
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-6xl px-6">
          <header className="mb-10 text-center">
            <p className="text-sm font-medium text-[var(--accent-300)]">About</p>
            <h2 className="mt-2 text-3xl font-bold text-[var(--tx-primary)] sm:text-4xl">
              About Me
            </h2>
          </header>

          <div className="rounded-2xl border border-[var(--bd-card)] bg-[var(--bg-section)] p-8 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_10px_rgba(59,130,246,0.12)]">
            <p className="text-[var(--tx-muted)]">
              I'm a Software Engineering student passionate about building
              efficient, scalable applications and solving complex problems
              through technology.
            </p>

            <div className="mt-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-[var(--tx-primary)]">
                  Technical Skills
                </h3>
              </div>

              <div
                className="relative mt-6 overflow-hidden rounded-2xl border border-[var(--bd-card)] bg-[var(--bg-section-strong)] p-2 backdrop-blur-10xl"
                style={{ perspective: "1400px" }}
              >
                <div
                  className={`relative h-[24rem] overflow-hidden sm:h-[12rem] ${isDraggingSkills ? "cursor-grabbing" : "cursor-grab"}`}
                  onMouseEnter={() => setIsSkillsHovered(true)}
                  onMouseLeave={() => setIsSkillsHovered(false)}
                  onPointerDown={onSkillsPointerDown}
                  onPointerMove={onSkillsPointerMove}
                  onPointerUp={finishSkillsDrag}
                  onPointerCancel={finishSkillsDrag}
                >
                  {technicalSkillGroups.map((group, idx) => {
                    const relative = getRelativeSkillOffset(idx);
                    const absRelative = Math.abs(relative);

                    let transform = "translate3d(-50%, -50%, 0) scale(1)";
                    let cardClasses = "z-30 border-[var(--bd-strong)] backdrop-blur-lg";

                    if (relative === -1) {
                      transform =
                        "translate3d(-102%, -50%, -130px) rotateY(28deg) scale(0.86)";
                      cardClasses =
                        "z-20 border-[var(--bd-strong)] bg-[var(--bg-section-solid)] opacity-95 backdrop-blur-lg";
                    } else if (relative === 1) {
                      transform =
                        "translate3d(2%, -50%, -130px) rotateY(-28deg) scale(0.86)";
                      cardClasses =
                        "z-20 border-[var(--bd-strong)] bg-[var(--bg-section-solid)] opacity-95 backdrop-blur-lg";
                    } else if (relative === -2) {
                      transform =
                        "translate3d(-165%, -50%, -230px) rotateY(40deg) scale(0.72)";
                      cardClasses = "z-10 border-[var(--bd-card)] opacity-0";
                    } else if (relative === 2) {
                      transform =
                        "translate3d(65%, -50%, -230px) rotateY(-40deg) scale(0.72)";
                      cardClasses = "z-10 border-[var(--bd-card)] opacity-0";
                    } else if (absRelative > 2) {
                      transform = "translate3d(-50%, -50%, -260px) scale(0.66)";
                      cardClasses = "z-0 border-[var(--bd-card)] opacity-0";
                    }

                    const dragFactor =
                      absRelative === 0 ? 1 : absRelative === 1 ? 0.85 : 0.65;
                    const dragShift = isDraggingSkills
                      ? skillsDragDelta * dragFactor
                      : 0;

                    return (
                      <article
                        key={group.title}
                        className={`absolute left-1/2 top-1/2 w-[90%] sm:w-[72%] md:w-[58%] rounded-2xl border bg-[var(--bg-card-skill)] p-5 transition-[transform,opacity,box-shadow,border-color] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isDraggingSkills ? "duration-100" : "duration-500"
                        } ${cardClasses}`}
                        style={{
                          transform: `translateX(${dragShift}px) ${transform}`,
                        }}
                        onClick={() => {
                          if (relative === -1) moveSkillsPrev();
                          if (relative === 1) moveSkillsNext();
                        }}
                      >
                        <h4 className="text-lg font-semibold text-[var(--tx-primary)]">
                          {group.title}
                        </h4>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {group.items.map((skill) => (
                            <span
                              key={`${group.title}-${skill}`}
                              className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1.5 text-sm text-[var(--accent-100)]"
                            >
                              {/* <img src={assetUrl(getSkillIcon(skill))} alt="" className="h-4 w-4" loading="lazy" decoding="async" /> */}
                              {skill}
                            </span>
                          ))}
                        </div>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-5 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={moveSkillsPrev}
                    className="text-lg leading-none font-semibold text-[var(--accent-100)] transition hover:text-[var(--tx-primary)]"
                    aria-label="Show previous skill category"
                  >
                    <span className="inline-block transition-transform hover:-translate-x-0.5">
                      &lt;
                    </span>
                  </button>

                  <div className="flex items-center gap-2">
                    {technicalSkillGroups.map((group, idx) => (
                      <button
                        key={group.title}
                        type="button"
                        onClick={() => setActiveSkillGroupIdx(idx)}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === activeSkillGroupIdx
                            ? "w-10 bg-blue-400"
                            : "w-4 bg-[var(--bg-dot-inactive)] hover:bg-[var(--bg-dot-hover)]"
                        }`}
                        aria-label={`Show ${group.title} skills`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={moveSkillsNext}
                    className="text-lg leading-none font-semibold text-[var(--accent-100)] transition hover:text-[var(--tx-primary)]"
                    aria-label="Show next skill category"
                  >
                    <span className="inline-block transition-transform hover:translate-x-0.5">
                      &gt;
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--bd-card)] bg-[var(--bg-section)] p-8 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_10px_rgba(59,130,246,0.12)]">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--bd-card)] bg-[var(--bg-card)]">
                <GraduationCap className="h-5 w-5 text-[var(--accent-200)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--tx-primary)]">Education</h3>
            </div>

            <div className="mt-6 space-y-6">
              {education.map((e) => (
                <div
                  key={`${e.school}-${e.dates}`}
                  className="rounded-xl border border-[var(--bd-card)] bg-[var(--bg-card)] p-6"
                >
                  <p className="text-base font-semibold text-[var(--tx-primary)]">
                    {e.degree}
                  </p>
                  <p className="mt-1 text-sm text-[var(--tx-muted)]">{e.school}</p>

                  <div className="mt-4 flex flex-col gap-2 text-sm text-[var(--tx-muted)] sm:flex-row sm:items-center sm:gap-4">
                    <span className="inline-flex items-center gap-2">
                      <CalendarRange className="h-4 w-4 text-[var(--accent-200)]" />
                      {e.dates}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[var(--accent-200)]" />
                      {e.location}
                    </span>
                  </div>

                  {e.courses ? (
                    <p className="mt-4 inline-flex items-start gap-2 text-sm text-[var(--tx-muted)]">
                      <NotebookText className="mt-0.5 h-4 w-4 flex-none text-[var(--accent-200)]" />
                      <span>
                        <span className="font-medium text-[var(--tx-primary)]">Courses:</span>{" "}
                        {e.courses}
                      </span>
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
