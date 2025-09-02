import React from "react";
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png";
import challenger from "/Challenger.png"
import turbofan from "/turbofan.png";
import charts from "/charts.png"
import SAE from "/SAE.png"

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div
        className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-brand-secondary rounded-full blur-3xl
            opacity-50 -top-5 left-10"
      ></div>

      <div className="relative z-10">
        <figure className="relative bg-gray-900/40 flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute h-[202px] inset-0 flex items-center justify-center bg-brand-primary bg-opacity-50 opacity-0 
              group-hover:opacity-100 transition-opacity duration-300"
            >
              <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-brand-primary">
                Live Preview
              </button>
            </a>
          )}
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          </header>
          <p className="text-gray-200 text-base">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const listProjects = [
    {
      image: project1,
      title: "Actuator Sizing & Kinematics Toolbox",
      description:
        "Python-based tool to size actuators and mounts for aircraft flight controls, with safe-trig helpers and plotting.",
      link: "",
    },
    {
      image: project2,
      title: "A320 Hydraulic System Model",
      description:
        "Simcenter Amesim simulation of the Green/Yellow/Blue systems with PTU, RAT logic, accumulators, and failure modes.",
      link: "",
    },
    {
      image: charts,
      title: "OJ Trading Platform",
      description:
        "Community project for Nasdaq futures using ICT strategies. Includes trade journaling, live sessions, and backtesting.",
      link: "",
    },
    {
      image: challenger,
      title: "Sales Engineering Dashboards",
      description:
        "Range maps, route studies, and competitor comparisons for Bombardier business jets, built with automation tools.",
      link: "",
    },
    {
      image: turbofan,
      title: "Engine Vibration Analysis",
      description:
        "PW1500G propulsion monitoring with test-flight vibration data analysis for Airbus A220 program.",
      link: "",
    },
    {
      image: SAE,
      title: "SAE Aero Design Aircraft",
      description:
        "Worked on wing/tail sizing, stability analysis, and control surface design for competition aircraft at Concordia.",
      link: "",
    },
  ];

  return (
    <main className="p-4" id="projects">
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center">
          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
            My <span className="text-brand-primary">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            A selection of aerospace, engineering, and community projects I’ve
            built or contributed to.
          </p>
        </header>
      </section>
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex flex-wrap gap-4 justify-center mt-6"
      >
        {listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
