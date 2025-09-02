import React from "react";
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png";
import challenger from "/Challenger.png";
import turbofan from "/turbofan.png";
import charts from "/charts.png";
import SAE from "/SAE.png";
import Airbus from "/Airbus.png";
import Pelargos from "/pelargos.png";
import CSA from "/CSA.png"

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
      image: challenger,
      title: "Challenger 300 Spoiler System Redesign",
      description:
        "System-level redesign of the CL300 spoiler system. Defined requirements and safety objectives (AFHA, SFHA, PSSA, FMEA), sized electro-hydrostatic actuators, modelled cockpit interfaces in CATIA, and validated concepts with wind-tunnel and CFD results.",
      link: "",
    },
    {
      image: Pelargos,
      title: "Pelargos-85 Regional Turboprop Conceptual Design",
      description:
        "Developed a 9–19-passenger regional turboprop concept. Performed airfoil selection, wing and vertical tail sizing, static stability and performance analyses, engine and propeller selection, and modelling in CATIA.",
      link: "",
    },
    {
      image: CSA,
      title: "Capstone — Cold-Gas Thruster Design (CSA Collaboration)",
      description:
        "Capstone project in partnership with the Canadian Space Agency to design and test a cold-gas thruster as a building block for a LiDAR-guided lunar payload-alignment platform. Responsibilities include requirements capture, PDR/CDR deliverables, test-stand architecture, and performance modelling.",
      link: "",
    },
    {
      image: Airbus,
      title: "Airbus Propulsion — Lessons-Learned Knowledge Tool",
      description:
        "Designed and implemented a lessons-learned tool integrated with Google Docs and Sheets using HTML/CSS/JavaScript (Apps Script). Delivered structured intake forms, metadata tagging, search, and automated reporting to improve knowledge capture and reuse across the propulsion team.",
      link: "",
    },
    {
      image: project2,
      title: "A320 Hydraulic System Model",
      description:
        "Built a Simcenter Amesim model of the A320 hydraulic architecture (Green/Yellow/Blue) with a focus on PTU behavior and RAT deployment logic. Executed transient and what-if studies to assess system robustness.",
      link: "",
    },
    {
      image: charts,
      title: "OJ Trading Platform",
      description:
        "Co-developed a community platform for Nasdaq futures research using ICT methodologies. Implemented trade journaling, session logging, and lightweight backtesting dashboards to support hypothesis tracking and performance review.",
      link: "",
    },
    {
      image: turbofan,
      title: "Engine Vibration Analysis — A220 PW1500G",
      description:
        "Processed and analyzed flight-test vibration data for the PW1500G on the A220 program. Drafted reports for  diagnosis and to support propulsion reliability monitoring and corrective-action recommendations.",
      link: "",
    },
    {
      image: SAE,
      title: "SAE Aero Design — Competition Aircraft",
      description:
        "Contributed to preliminary design for a competition UAV. Sized wing and empennage, evaluated stability and control, and defined control-surface geometry to meet payload, performance, and handling-quality constraints.",
      link: "",
    },
    {
      image: project1,
      title: "Actuator Sizing & Kinematics Toolbox",
      description:
        "Authored a Python tool for flight-control actuator sizing and linkage kinematics. Included safe-trigonometry utilities, parameter sweeps, and plotting routines to accelerate trade studies and design iteration.",
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
