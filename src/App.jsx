import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeControls from "./components/ThemeControls";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="min-h-screen bg-bg text-fg">
      {/* subtle palette bar */}
      <div className="h-1 w-full bg-brand-primary" />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* palette chooser */}
      <ThemeControls />
    </main>
  );
}

export default App;
