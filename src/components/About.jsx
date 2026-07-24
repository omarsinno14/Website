import React from "react";
import img_about2 from "/img_about2.png";
import imghero from "/imghero.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen overflow-visible sm:overflow-hidden flex items-start sm:items-center justify-center text-white px-4 sm:px-6 py-16 sm:py-0"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          <div
            className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l
            from-brand-primary via-brand-secondary to-brand-primary absolute transform rotate-12 z-0 right-5 -top-2
            md:top-10 rounded-full"
          />
          <img
            src={img_about2}
            alt="Omar at work"
            className="absolute -top-2 left-5 sm:left-10 transform -translate-y-6 sm:-translate-y-12 z-20 w-24 h-24 sm:w-32 sm:h-32
            rounded-3xl shadow-lg object-cover"
          />
          <img
            src={imghero}
            alt="Omar Sinno"
            className="relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 rounded-lg shadow-lg object-cover"
          />
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left relative"
        >
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-brand-secondary rounded-full blur-3xl opacity-50 -top-5 left-10" />

          <header>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h2>
          </header>

          <p className="text-base sm:text-lg text-gray-300 mb-5 leading-relaxed">
            I'm an aerospace engineer based in Montreal. I completed my Bachelor of Engineering
            in Aerospace Engineering at Concordia University and have worked across propulsion,
            flight controls, certification, and avionics through co-op terms at Airbus, Bombardier,
            and Bell Textron.
          </p>

          <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
            Currently at Airbus on the A220 program as an Avionics Integration Engineering
            Professional, I lead new development for secondary avionics systems, including
            Radio Altimeter integration. I coordinate with suppliers, define requirements,
            manage V&V, and support certification activities with Transport Canada.
          </p>

          <div id="experience" className="grid sm:grid-cols-2 gap-6 text-gray-300 text-sm">
            <div className="space-y-3">
              <h3 className="text-white font-semibold text-base">Experience</h3>
              <ul className="space-y-2">
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
              <h3 className="text-white font-semibold text-base">Education</h3>
              <ul className="space-y-2">
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

          <footer className="mt-8">
            <a
              href="#contact"
              className="inline-flex text-white border-2 py-2 px-6 focus:outline-none
                hover:bg-brand-secondary hover:border-brand-secondary rounded-full text-base transition"
            >
              Get in touch
            </a>
          </footer>
        </article>
      </div>
    </section>
  );
}
