import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="text-white px-4 sm:px-6 py-24 sm:py-32 flex justify-center"
    >
      <div className="max-w-4xl w-full" data-aos="fade-up" data-aos-delay="300">
        <div className="absolute z-0 w-60 h-60 bg-brand-secondary rounded-full blur-3xl opacity-30 -translate-x-1/2 left-1/2 pointer-events-none" />

        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">About Me</h2>
        </header>

        <p className="text-base sm:text-lg text-gray-300 mb-5 leading-relaxed">
          I'm an aerospace engineer based in Montreal. I completed my Bachelor of Engineering
          in Aerospace Engineering at Concordia University and have worked across propulsion,
          flight controls, certification, and avionics through co-op terms at Airbus, Bombardier,
          and Bell Textron.
        </p>

        <p className="text-base sm:text-lg text-gray-300 mb-12 leading-relaxed">
          Currently at Airbus on the A220 program as an Avionics Integration Engineering
          Professional, I lead new development for secondary avionics systems, including
          Radio Altimeter integration. I coordinate with suppliers, define requirements,
          manage V&V, and support certification activities with Transport Canada.
        </p>

        <div id="experience" className="grid sm:grid-cols-2 gap-8 text-sm">
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-base tracking-wide uppercase text-xs text-gray-400 mb-4">Experience</h3>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-white font-medium">Airbus, Montreal</span>
                <span className="text-gray-400">Avionics Integration Engineering Professional · A220 · Current</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">Bombardier, Dorval</span>
                <span className="text-gray-400">Advanced Product Development · Flight Controls</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">Bombardier, Dorval</span>
                <span className="text-gray-400">Sales Engineering · Aircraft Performance</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">Airbus, Mirabel</span>
                <span className="text-gray-400">Propulsion Engineering · A220 PW1500G</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">Bell Textron, Mirabel</span>
                <span className="text-gray-400">Aircraft Certification · Transport Canada</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">Middle East Airlines, Beirut</span>
                <span className="text-gray-400">AME Support · A320/A321neo</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-semibold text-base tracking-wide uppercase text-xs text-gray-400 mb-4">Education</h3>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-white font-medium">Concordia University</span>
                <span className="text-gray-400">BEng Aerospace Engineering · Dean's List</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">College Louise Wegmann</span>
                <span className="text-gray-400">Lebanese Baccalaureate · Top 1% of class</span>
              </li>
            </ul>
          </div>
        </div>

        <footer className="mt-10">
          <a
            href="#contact"
            className="inline-flex text-white border-2 py-2 px-6 focus:outline-none
              hover:bg-brand-secondary hover:border-brand-secondary rounded-full text-base transition"
          >
            Get in touch
          </a>
        </footer>
      </div>
    </section>
  );
}
