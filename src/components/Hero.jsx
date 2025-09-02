import React from "react";
import Navbar from "./Navbar";
import imghero from "/imghero.png";
import github from "/github.png";
import linkedin from "/linkedin.png";
import facebook from "/facebook.png";
import instagram from "/instagram.png";
import OmarCV from "/Omar.pdf";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center">
      <div
        className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-brand-primary via-brand-secondary
        to-brand-primary transform rotate-45 z-0 right-2 top-28 rounded-3xl"
      ></div>
      <Navbar />
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 
      md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {/* CHANGED: hide the green glow on mobile to avoid overlap */}
          <div className="hidden sm:block absolute -z-10 w-60 h-60 bg-brand-secondary rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>

          <header>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Omar Sinno
            </h1>
            {/* CHANGED: white on mobile, brand-secondary on sm+ */}
            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-white sm:text-brand-secondary mb-2">
              Aerospace Engineering Student • Aircraft Design, Systems & Software
            </h2>
          </header>

          <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">
            Final-year student at Concordia University. I design aircraft concepts, capture and draft
            requirements, and run analyses. I also
            build tools for flight-controls and automation—turning complex problems
            into clear, reliable solutions. Experience with Bombardier, Airbus, and
            Bell Textron.
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" className="w-11 h-11" />
            </a>
            <a
              href="https://www.linkedin.com/in/omar-sinno-70235b238/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="Linkedin" className="w-11 h-11" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="facebook" className="w-11 h-11" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" className="w-11 h-11" />
            </a>
          </div>
          <a href={OmarCV} download>
            <button
              className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-brand-secondary 
            hover:shadow-[0_0_40px_rgba(147,51,234,0.7)] rounded-full text-lg"
            >
              Download CV
            </button>
          </a>
        </section>

        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-end mt-0"
        >
          <img
            src={imghero}
            alt="Hero Image"
            className="h-[300px] sm:h-[400px] md:h-[485px] w-[250px] sm:w-[480px] object-cover rounded-lg"
          />
        </figure>
      </main>
    </div>
  );
}

