import { useEffect, useState } from "react";

import { LoadingScreen } from "./components/LoadingScreen";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { ThreeAuraBackground } from "./components/ThreeAuraBackground";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Extracurricular } from "./components/sections/Extracurricular";
import { Contact } from "./components/sections/Contact";

import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`relative min-h-screen overflow-x-hidden transition-colors transition-opacity duration-700 ${
          theme === "dark" ? "bg-black text-gray-100" : "bg-slate-100 text-slate-900"
        } ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="pointer-events-none fixed inset-0 z-0">
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-b from-black via-zinc-950 to-black"
                : "bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100"
            }`}
          />

          <div
            className={`absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] ${
              theme === "dark" ? "opacity-100" : "opacity-45"
            }`}
          />

          <ThreeAuraBackground />
          <AnimatedBackground />

          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-b from-transparent via-transparent to-black/40"
                : "bg-gradient-to-b from-transparent via-transparent to-slate-300/50"
            }`}
          />
        </div>

        <div className="relative z-10">
          <Navbar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            theme={theme}
            onToggleTheme={handleToggleTheme}
          ></Navbar>
          <MobileMenu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            theme={theme}
            onToggleTheme={handleToggleTheme}
          ></MobileMenu>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Extracurricular />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
