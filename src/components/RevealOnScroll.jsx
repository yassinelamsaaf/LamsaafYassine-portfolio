import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add("visible");
                } else {
                    element.classList.remove("visible"); // Remove class when out of view
                }
            },
            { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, []);

    return <div ref={ref} className="reveal">{children}</div>;
};
