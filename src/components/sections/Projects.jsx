import { useEffect, useRef, useState } from "react";

import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { assetUrl } from "../../lib/assetUrl";
import { RevealOnScroll } from "../RevealOnScroll";
import { CustomScrollbar } from "../CustomScrollbar";

const ProjectCard = ({
  project,
  onOpenDetails,
  animationClassName = "",
  animationDelay = 0,
}) => {
  const images = project.images?.length ? project.images : [project.cover];
  const [activeIndex, setActiveIndex] = useState(0);
  const canSlide = images.length > 1;

  const handleCardClick = (e) => {
    if (e.target.tagName === "A") return;
    onOpenDetails(project);
  };

  const goPrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!canSlide) return;
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  };

  const goNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!canSlide) return;
    setActiveIndex((i) => (i + 1) % images.length);
  };

  return (
    <article
      onClick={handleCardClick}
      className={`h-full min-h-[34rem] cursor-pointer rounded-2xl border border-white/10 bg-blue-950/20 p-6 text-left backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-blue-500/20 hover:shadow-[0_2px_12px_rgba(59,130,246,0.12)] [backface-visibility:hidden] [transform-style:preserve-3d] flex flex-col ${animationClassName}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_50%)] opacity-60" />

        <img
          src={assetUrl(images[activeIndex])}
          alt=""
          className="relative h-52 w-full object-cover"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-4">
          <h3 className="text-lg font-semibold text-white sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-1 text-xs text-blue-200/90">{project.dates}</p>
        </div>

        {canSlide ? (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-2 text-white transition hover:bg-black/60"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-2 text-white transition hover:bg-black/60"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        ) : null}
      </div>

      <p className="mt-4 min-h-[4.5rem] text-sm leading-relaxed text-gray-300">
        {project.description}
      </p>

      <div className="mt-4 min-h-[5.25rem] content-start flex flex-wrap gap-2">
        {project.tech?.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-200 transition-all hover:-translate-y-0.5 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.12)]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto flex justify-end pt-5">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(project);
          }}
          className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
        >
          View Project »»
        </button>
      </div>
    </article>
  );
};

const ProjectDetailsModal = ({ project, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) return null;

  const images = project.images?.length ? project.images : [project.cover];

  const goPrev = () => {
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  };

  const goNext = () => {
    setActiveIndex((i) => (i + 1) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-white/10 bg-zinc-950/95 p-4 backdrop-blur sm:p-6">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-white/10 bg-black/30 p-2 text-gray-200 transition hover:bg-black/50"
            aria-label="Close details"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <CustomScrollbar className="max-h-[calc(90vh-120px)]">
          <div className="p-4 sm:p-6 space-y-8">
            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_50%)] opacity-60" />
                <img
                  src={assetUrl(images[activeIndex])}
                  alt=""
                  className="relative h-64 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {images.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={goPrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-2 text-white transition hover:bg-black/60"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-2 text-white transition hover:bg-black/60"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                ) : null}
              </div>

              {images.length > 1 ? (
                <div className="flex justify-center gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === activeIndex
                          ? "w-6 bg-blue-500"
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              ) : null}
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-blue-300">
                Project Details
              </h4>
              <p className="text-sm leading-relaxed text-gray-300">
                {project.description}
              </p>
            </div>

            {project.features?.length ? (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-blue-300">
                  Main functionalities
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-blue-300">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
              >
                View Project »»
              </button>
            </div>
          </div>
        </CustomScrollbar>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [positionIndex, setPositionIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState(1);
  const [isHoveringSlider, setIsHoveringSlider] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef(null);
  const dragStateRef = useRef({ dragging: false, startX: 0 });

  const projects = [
    {
      title: "OrientLamp – Student Orientation App",
      dates: "Dec. 2024 – Present",
      description:
        "Web app helping students navigate academic path and major choices, powered by a chatbot.",
      cover: "images/projects/orientlamp.svg",
      images: [
        "images/projects/orientlamp1.png",
        "images/projects/orientlamp2.png",
        "images/projects/orientlamp3.png",
      ],
      tech: ["React", "Spring Boot", "PostgreSQL", "Git/GitHub"],
    },
    {
      title: "INE Alumni",
      dates: "Ongoing",
      description:
        "An alumni-student networking platform built with professional alumni, focused on code quality and best practices.",
      cover: "images/projects/inealumni1.png",
      images: ["images/projects/inealumni1.png"],
      features: [
        "Built core directory, job offers, and events features with professional alumni collaborators.",
        "Focused on code quality, maintainability, and best practices throughout development.",
      ],
      tech: [
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
    },
    {
      title: "CIT eLearning Platform",
      dates: "Oct. 2025 – Present",
      description: "E-learning platform for the CIT web cell at INPT.",
      cover: "images/projects/cit-elearning.svg",
      images: [
        "images/projects/cit-elearning.svg",
        "images/projects/cit-elearning.svg",
      ],
      tech: ["Next.js", "Spring Boot", "Tailwind CSS", "MDX", "Supabase"],
    },
    {
      title: "Portfolio Website",
      dates: "Ongoing",
      description: "Interactive personal portfolio with 3D rendering.",
      cover: "images/projects/portfolio-3d.svg",
      images: [
        "images/projects/portfolio1.png",
      ],
      tech: ["React.js", "Tailwind CSS", "Three.js"],
    },
    {
      title: "Travelo DevOps Platform",
      dates: "Mar. 2026 – Present",
      description:
        "Containerized 3-tier web app with automated deployment via CI/CD, Kubernetes, and GitOps.",
      cover: "images/projects/travelo-devops.svg",
      images: [
        "images/projects/travelo-devops.svg",
        "images/projects/travelo-devops.svg",
      ],
      tech: [
        "Java",
        "Spring Boot",
        "MySQL",
        "React",
        "Nginx",
        "Docker",
        "Docker Compose",
        "GitHub Actions",
        "Kubernetes",
        "Argo CD",
        "Linux",
      ],
    },
  ];

  const projectCount = projects.length;
  const visibleCount = isMobile ? 1 : 2;
  const totalPositions = projectCount * (isMobile ? 2 : 1);
  const stepPercent = 100 / (visibleCount + 1);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const applyMatch = () => setIsMobile(media.matches);
    applyMatch();

    if (media.addEventListener) {
      media.addEventListener("change", applyMatch);
      return () => media.removeEventListener("change", applyMatch);
    }

    media.addListener(applyMatch);
    return () => media.removeListener(applyMatch);
  }, []);

  const getIndex = (offset) =>
    (startIndex + offset + projectCount) % projectCount;

  const slidingIndexes =
    slideDirection === 1
      ? Array.from({ length: visibleCount + 1 }, (_, i) => getIndex(i))
      : Array.from({ length: visibleCount + 1 }, (_, i) => getIndex(i - 1));

  const goNext = () => {
    if (isAnimating) return;
    setPositionIndex((prev) => (prev + 1) % totalPositions);
    setSlideDirection(1);
    requestAnimationFrame(() => setIsAnimating(true));
  };

  const goPrev = () => {
    if (isAnimating) return;
    setPositionIndex((prev) => (prev - 1 + totalPositions) % totalPositions);
    setSlideDirection(-1);
    requestAnimationFrame(() => setIsAnimating(true));
  };

  const handleTrackTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (!isAnimating) return;

    if (slideDirection === 1) {
      setStartIndex((prev) => (prev + 1) % projectCount);
    } else {
      setStartIndex((prev) => (prev - 1 + projectCount) % projectCount);
    }

    setIsAnimating(false);
    setSlideDirection(1);
  };

  const onPointerDown = (e) => {
    dragStateRef.current = { dragging: true, startX: e.clientX };
  };

  const onPointerUp = (e) => {
    if (!dragStateRef.current.dragging || isAnimating) return;
    const delta = e.clientX - dragStateRef.current.startX;
    dragStateRef.current.dragging = false;

    if (delta <= -55) {
      goNext();
    } else if (delta >= 55) {
      goPrev();
    }
  };

  useEffect(() => {
    if (isAnimating || isHoveringSlider || selectedProject) return undefined;

    const timer = window.setInterval(() => {
      setSlideDirection(1);
      setIsAnimating(true);
    }, 2000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isAnimating, isHoveringSlider, selectedProject]);

  useEffect(() => {
    setPositionIndex((prev) => prev % totalPositions);
  }, [totalPositions]);

  const activePosition = positionIndex + 1;

  return (
    <section id="projects" className="py-24 scroll-mt-24">
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-6xl px-6">
          <header className="mb-10 text-center">
            <p className="text-sm font-medium text-blue-300">Work</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Featured Projects
            </h2>
          </header>

          <div
            className="overflow-hidden p-2 rounded-2xl"
            onMouseEnter={() => setIsHoveringSlider(true)}
            onMouseLeave={() => setIsHoveringSlider(false)}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              dragStateRef.current.dragging = false;
            }}
          >
            <div
              ref={trackRef}
              onTransitionEnd={handleTrackTransitionEnd}
              className={`flex ${isAnimating ? "duration-500" : "duration-0"} transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]`}
              style={{
                width: `${((visibleCount + 1) / visibleCount) * 100}%`,
                transform:
                  slideDirection === 1
                    ? isAnimating
                      ? `translateX(-${stepPercent}%)`
                      : "translateX(0%)"
                    : isAnimating
                      ? "translateX(0%)"
                      : `translateX(-${stepPercent}%)`,
              }}
            >
              {slidingIndexes.map((projectIndex) => (
                <div
                  key={`${projects[projectIndex].title}-${projectIndex}`}
                  className="h-full px-3"
                  style={{ width: `${100 / (visibleCount + 1)}%` }}
                >
                  <ProjectCard
                    project={projects[projectIndex]}
                    onOpenDetails={setSelectedProject}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 text-sm">
            <button
              type="button"
              onClick={goPrev}
              disabled={isAnimating}
              className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-gray-200 transition hover:border-blue-400/45 hover:text-white"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="hidden text-gray-300 sm:block">
              {" "}
              <span className="font-medium text-white">{activePosition}</span> /{" "}
              {totalPositions}
            </div>

            <button
              type="button"
              onClick={goNext}
              disabled={isAnimating}
              className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-gray-200 transition hover:border-blue-400/45 hover:text-white"
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </RevealOnScroll>

      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
