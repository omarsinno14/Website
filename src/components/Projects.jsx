import React from "react";
import challenger from "/Challenger.png";
import turbofan from "/turbofan.png";
import charts from "/charts.png";
import SAE from "/SAE.png";
import Airbus from "/Airbus.png";
import Pelargos from "/pelargos.png";
import CSA from "/CSA.png";
import project1 from "/project1.png";
import project2 from "/project2.png";

const ProjectCard = ({ image, title, description, tags, link }) => {
  return (
    <article className="relative max-w-sm bg-card border border-border rounded-lg overflow-hidden group flex flex-col">
      <div className="absolute z-0 w-40 h-40 bg-brand-secondary rounded-full blur-3xl opacity-30 -top-5 left-10" />

      <div className="relative z-10 flex flex-col h-full">
        <figure className="relative bg-gray-900/40 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-44 object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span className="bg-white font-medium text-black py-2 px-4 rounded-full text-sm shadow hover:bg-brand-primary hover:text-white transition">
                View Project
              </span>
            </a>
          )}
        </figure>
        <div className="px-5 py-4 flex flex-col flex-1">
          <header>
            <h3 className="text-white font-bold text-base mb-2">{title}</h3>
          </header>
          <p className="text-gray-300 text-sm leading-relaxed flex-1">{description}</p>
          {tags && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag, i) => (
                <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-brand-secondary/20 text-brand-secondary border border-brand-secondary/30">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

const projects = [
  {
    image: challenger,
    title: "Challenger 300 Spoiler System Redesign",
    description:
      "System-level redesign of the CL300 spoiler system. Defined requirements and safety objectives (AFHA, SFHA, PSSA, FMEA), sized electro-hydrostatic actuators, modelled cockpit interfaces in CATIA, and validated concepts with wind-tunnel and CFD results.",
    tags: ["CATIA", "FMEA", "ARP4754A", "EHA"],
    link: "",
  },
  {
    image: Pelargos,
    title: "Pelargos-85 Regional Turboprop — Conceptual Design",
    description:
      "Developed a 9 to 19 passenger regional turboprop concept. Performed airfoil selection, wing and vertical tail sizing, static stability and performance analyses, engine and propeller selection, and full modelling in CATIA.",
    tags: ["CATIA", "Aerodynamics", "Performance Analysis"],
    link: "",
  },
  {
    image: CSA,
    title: "Cold-Gas Thruster Design — CSA Capstone",
    description:
      "Capstone project in partnership with the Canadian Space Agency to design and test a cold-gas thruster as a building block for a LiDAR-guided lunar payload alignment platform. Responsibilities included requirements capture, PDR and CDR deliverables, test-stand architecture, and performance modelling.",
    tags: ["Propulsion", "Space Systems", "Requirements", "Testing"],
    link: "",
  },
  {
    image: Airbus,
    title: "Airbus Propulsion Lessons Learned Knowledge Tool",
    description:
      "Designed and implemented a lessons-learned tool integrated with Google Docs and Sheets using HTML, CSS, and JavaScript (Apps Script). Delivered structured intake forms, metadata tagging, search, and automated reporting to improve knowledge capture across the propulsion team.",
    tags: ["JavaScript", "Apps Script", "Knowledge Management"],
    link: "",
  },
  {
    image: project2,
    title: "A320 Hydraulic System Model",
    description:
      "Built a Simcenter Amesim model of the A320 hydraulic architecture (Green, Yellow, Blue) with a focus on PTU behavior and RAT deployment logic. Executed transient and scenario studies to assess system robustness.",
    tags: ["Simcenter Amesim", "Hydraulics", "A320"],
    link: "",
  },
  {
    image: turbofan,
    title: "Engine Vibration Analysis — A220 PW1500G",
    description:
      "Processed and analyzed flight-test vibration data for the PW1500G on the A220 program. Drafted technical reports supporting propulsion reliability monitoring and corrective-action recommendations.",
    tags: ["Data Analysis", "A220", "PW1500G", "Flight Test"],
    link: "",
  },
  {
    image: project1,
    title: "Actuator Sizing and Kinematics Toolbox",
    description:
      "Authored a Python tool for flight-control actuator sizing and linkage kinematics. Included safe-trigonometry utilities, parameter sweeps, and plotting routines to accelerate trade studies and design iteration.",
    tags: ["Python", "Flight Controls", "Automation"],
    link: "",
  },
  {
    image: SAE,
    title: "SAE Aero Design — Competition Aircraft",
    description:
      "Contributed to preliminary design for a competition UAV at SAE Aero Design (Concordia). Sized wing and empennage, evaluated stability and control, and defined control-surface geometry to meet payload, performance, and handling-quality constraints.",
    tags: ["Aircraft Design", "Aerodynamics", "UAV"],
    link: "",
  },
];

export default function Projects() {
  return (
    <section className="px-4 py-24 sm:py-32" id="projects">
      <div data-aos="fade-up" data-aos-delay="300" className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <h2 className="text-3xl text-white sm:text-4xl font-bold">
            Selected <span className="text-brand-primary">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm max-w-xl mx-auto">
            Aerospace design, systems engineering, and software tooling spanning commercial, regional, and space programs.
          </p>
        </header>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex flex-wrap gap-5 justify-center"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
