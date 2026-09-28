import React from "react";
import Navbar from "./Navbar";
import imghero from "/imghero.png";
import github from "/github.png";
import linkedin from "/linkedin.png";
import OmarCV from "/Omar.pdf";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden flex flex-col items-center pb-8">
      <div
        className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-brand-primary via-brand-secondary
        to-brand-primary transform rotate-45 -z-10 right-2 top-28 rounded-3xl opacity-60"
      />
      <Navbar />
      <main
        id="home"
        className="relative flex flex-col md:flex-row items-center justify-center w-full px-4
        md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 mr-0 md:mr-28 md:text-left mt-10 md:mt-0 relative"
        >
          <div className="hidden sm:block absolute -z-10 w-60 h-60 bg-brand-secondary rounded-full blur-3xl opacity-50 -top-5 -left-12" />

          <header>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Omar Sinno
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-2xl font-semibold text-brand-secondary mb-4">
              Avionics Integration Engineering Professional
            </h2>
          </header>

          <p className="text-base sm:text-lg text-gray-200 mb-6 leading-relaxed max-w-lg">
            At Airbus on the A220, I am responsible for Cockpit Control Panels, the Radio Altimeter,
            and the Maintenance Panel. I also lead selected developments within the secondary avionics
            team, covering V&amp;V, supplier steering, and certification.
          </p>

          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <img src={github} alt="GitHub" className="w-10 h-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/omar-sinno-70235b238/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#experience">
              <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-brand-primary hover:border-brand-primary rounded-full text-base transition">
                View Experience
              </button>
            </a>
            <a href={OmarCV} download="Omar_Sinno_CV.pdf">
              <button className="inline-flex text-white border-2 border-brand-secondary py-2 px-6 focus:outline-none hover:bg-brand-secondary rounded-full text-base transition">
                Download CV
              </button>
            </a>
          </div>
        </section>

        <figure
          className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <img
            src={imghero}
            alt="Omar Sinno"
            className="h-[300px] sm:h-[400px] md:h-[485px] w-[250px] sm:w-[480px] object-cover rounded-lg"
          />
        </figure>
      </main>
    </div>
  );
}
