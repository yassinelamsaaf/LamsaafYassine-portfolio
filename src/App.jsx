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
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-gradient-from)] via-[var(--bg-gradient-to)] to-[var(--bg-gradient-from)]" />

          <div
            className={`absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:24px_24px]`}
          />

          <ThreeAuraBackground />
          <AnimatedBackground />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-gradient-from)]/40" />
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
