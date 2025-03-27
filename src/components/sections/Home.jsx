import { RevealOnScroll } from "../RevealOnScroll";
import picofme from "../../../public/picofme.png"

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center text-center md:text-left">
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text leading-right text-transparent">
              Hi, I'm Lamsaaf Yassine
            </h1>

            <p className="text-gray-400 text-lg my-15 max-w-200 mx-auto">
              I'm a passionate Software Engineering student with a strong
              interest in building efficient, scalable, and user-friendly
              applications. I enjoy solving complex problems, exploring new
              technologies, and continuously improving my skills in software
              development, aiming to make an impact through technology.
            </p>

            <div className="flex flex-col flex-wrap md:flex-row justify-center md:justify-center gap-4">
              <a
                href="LamsaafYassine-portfolio/cv.pdf"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-500/10 "
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-10 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-500/10 "
              >
                Contact Me
              </a>
            </div>
          </div>
          <div>
            <img className="profilepic w-70 mt-20 md:mt-0 md:w-100 py-2  md:ml-0" src={picofme} alt="" />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
