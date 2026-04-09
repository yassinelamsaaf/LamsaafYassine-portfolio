import { useEffect, useRef, useState } from "react";

import {
  CalendarRange,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  MapPin,
  Users,
} from "lucide-react";

import { assetUrl } from "../../lib/assetUrl";
import { RevealOnScroll } from "../RevealOnScroll";

export const Extracurricular = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef(null);

  const items = [
    {
      title: "Vice-President Relations Externes",
      org: "Junior Entreprise A2S - INPT",
      location: "INPT",
      dates: "09/2025 - present",
      image: "images/extracurricular/community-a.svg",
      points: [
        "Organisation d'evenements (mentoring, workshops, tech talks) et developpement de partenariats externes.",
        "Contribution a plusieurs projets techniques au sein de la junior entreprise.",
      ],
    },
    {
      title: "Chef Cellule Web",
      org: "Club Informatique & Telecom (CIT) - INPT",
      location: "INPT",
      dates: "09/2025 - present",
      image: "images/extracurricular/community-b.svg",
      points: [
        "Responsable de l'organisation et de l'animation des formations web pour les membres de la cellule.",
      ],
    },
    {
      title: "Membre de l'equipe projet 'OrientLamp'",
      org: "ENACTUS - INPT",
      location: "INPT",
      dates: "09/2024 - present",
      image: "images/extracurricular/community-a.svg",
      points: [
        "Membre de l'equipe projet 'OrientLamp'.",
      ],
    },
    {
      title: "Membre actif",
      org: "Social Affairs Club (CAS) - INPT",
      location: "INPT",
      dates: "2024 - present",
      image: "images/extracurricular/community-b.svg",
      points: [
        "Membre actif.",
      ],
    },
    {
      title: "Membre de l'equipe organisatrice",
      org: "AI Awareness for Students - Safer Internet Day Initiative",
      location: "INPT",
      dates: "02/2025 - present",
      image: "images/extracurricular/community-a.svg",
      points: [
        "Membre de l'equipe organisatrice des sessions de sensibilisation a l'IA.",
      ],
    },
  ];

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

  const visibleCount = isMobile ? 1 : 3;
  const itemCount = items.length;
  const stepPercent = 100 / (visibleCount + 1);

  const getIndex = (offset) => (startIndex + offset + itemCount) % itemCount;

  const slidingIndexes =
    direction === 1
      ? Array.from({ length: visibleCount + 1 }, (_, i) => getIndex(i))
      : Array.from({ length: visibleCount + 1 }, (_, i) => getIndex(i - 1));

  const goNext = () => {
    if (isAnimating) return;
    setDirection(1);
    requestAnimationFrame(() => setIsAnimating(true));
  };

  const goPrev = () => {
    if (isAnimating) return;
    setDirection(-1);
    requestAnimationFrame(() => setIsAnimating(true));
  };

  const onTrackTransitionEnd = (e) => {
    if (e.target !== e.currentTarget || !isAnimating) return;

    if (direction === 1) {
      setStartIndex((prev) => (prev + 1) % itemCount);
    } else {
      setStartIndex((prev) => (prev - 1 + itemCount) % itemCount);
    }

    setIsAnimating(false);
    setDirection(1);
  };

  useEffect(() => {
    if (isAnimating || isHovering) return undefined;

    const timer = window.setInterval(() => {
      setDirection(1);
      setIsAnimating(true);
    }, isMobile ? 1000 : 2200);

    return () => window.clearInterval(timer);
  }, [isAnimating, isHovering, isMobile]);

  return (
    <section id="extracurricular" className="py-24 scroll-mt-24">
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-6xl px-6">
          <header className="mb-10 text-center">
            <p className="text-sm font-medium text-blue-300">Community</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Extracurricular
            </h2>
          </header>

          <div className="rounded-2xl border border-white/10 bg-blue-950/20 p-6 backdrop-blur-md">
            <div
              className="overflow-hidden rounded-2xl"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div
                ref={trackRef}
                onTransitionEnd={onTrackTransitionEnd}
                className={`flex ${isAnimating ? "duration-500" : "duration-0"} transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]`}
                style={{
                  width: `${((visibleCount + 1) / visibleCount) * 100}%`,
                  transform:
                    direction === 1
                      ? isAnimating
                        ? `translateX(-${stepPercent}%)`
                        : "translateX(0%)"
                      : isAnimating
                        ? "translateX(0%)"
                        : `translateX(-${stepPercent}%)`,
                }}
              >
                {slidingIndexes.map((itemIndex) => {
                  const item = items[itemIndex];

                  return (
                    <div
                      key={`${item.title}-${itemIndex}`}
                      className="px-3"
                      style={{ width: `${100 / (visibleCount + 1)}%` }}
                    >
                      <article className="h-full rounded-2xl border border-white/10 bg-black/20 p-6 transition-all hover:-translate-y-0.5 hover:border-blue-500/20 hover:shadow-[0_2px_10px_rgba(59,130,246,0.12)]">
                        <div className="relative mb-5 overflow-hidden rounded-xl border border-white/10 bg-black/30">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_50%)] opacity-60" />
                          <img
                            src={assetUrl(item.image)}
                            alt=""
                            className="relative h-40 w-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>

                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-lg font-semibold text-white">
                              {item.title}
                            </p>
                            <p className="mt-1 text-sm text-gray-300">{item.org}</p>

                            <div className="mt-4 flex flex-col gap-2 text-sm text-gray-300 sm:flex-row sm:items-center sm:gap-4">
                              <span className="inline-flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-blue-200" />
                                {item.location}
                              </span>
                              {item.dates ? (
                                <span className="inline-flex items-center gap-2">
                                  <CalendarRange className="h-4 w-4 text-blue-200" />
                                  {item.dates}
                                </span>
                              ) : null}
                            </div>
                          </div>

                          <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/20">
                            <Users className="h-5 w-5 text-blue-200" />
                          </div>
                        </div>

                        <div className="mt-5 space-y-2 text-sm text-gray-300">
                          {item.points.map((p) => (
                            <p key={p} className="flex gap-2">
                              <CircleDot className="mt-0.5 h-4 w-4 flex-none text-blue-200" />
                              <span>{p}</span>
                            </p>
                          ))}
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                disabled={isAnimating}
                className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-gray-200 transition hover:border-blue-400/45 hover:text-white"
                aria-label="Previous extracurricular card"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={goNext}
                disabled={isAnimating}
                className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-gray-200 transition hover:border-blue-400/45 hover:text-white"
                aria-label="Next extracurricular card"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
