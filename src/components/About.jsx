import React from "react";
import img_about1 from "/img_about1.png";
import img_about2 from "/img_about2.png";
import img_about from "/Clara.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          <div
            className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l
            from-brand-primary via-brand-secondary to-brand-primary absolute transform rotate-12 z-0 right-5 -top-2
             md:top-10 rounded-full"
          />
          <img
            src={img_about1}
            alt="about picture 1"
            className="absolute -top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-24 h-24 sm:w-32 sm:h-32
             rounded-3xl shadow-lg"
          />
          <img
            src={img_about2}
            alt="about picture 2"
            className="relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 rounded-lg shadow-lg"
          />
          <img
            src={img_about}
            alt="about picture "
            className="absolute bottom-0 right-5 sm:right-10 transform translate-y-12 z-10 w-20 h-20 sm:w-32
             sm:h-32 rounded-3xl shadow-lg"
          />
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <div
            className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-brand-secondary rounded-full blur-3xl opacity-50
            -top-5 left-10"
          />
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About Me
            </h1>
          </header>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Aerospace engineering student at Concordia. I build practical tools for
            flight-control actuators, kinematics, and flight-test data—turning messy
            requirements into clean, reliable software.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
            <div className="space-y-2">
              <h3 className="text-white font-semibold">Recent Experience</h3>
              <ul className="space-y-1">
                <li>• Bombardier — Advanced Product Development (Intern)</li>
                <li>• Bombardier — Sales Engineering (Intern)</li>
                <li>• Airbus A220 — Propulsion / PW1500G (Intern)</li>
                <li>• Bell Textron — Certification (Intern)</li>
                <li>• Space Concordia • SAE Aero — Systems</li>
                <li>• Middle East Airlines — AME Support</li>
              </ul>
            </div>

            {/* Tech & Tools moved to Skills.jsx */}
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Interests: aviation, engineering automation, investing, basketball.
          </p>

          <footer className="mt-6">
            <a
              href="#contact"
              className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none
                hover:bg-brand-secondary hover:shadow-[0_0_40px_rgba(147,51,234,0.7)] rounded-full text-sm sm:text-lg"
            >
              Let’s work together
            </a>
          </footer>
        </article>
      </div>
    </section>
  );
}
