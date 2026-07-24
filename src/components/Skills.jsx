import React from "react";
import { FiCheck } from "react-icons/fi";

const categories = [
  {
    id: 1,
    title: "Engineering Domains",
    groups: [
      {
        label: "Avionics & Systems",
        items: [
          "Avionics Integration",
          "Secondary Avionics",
          "Radio Altimeter",
          "Aircraft Systems Integration",
          "Interface Definition",
          "Requirements Management",
        ],
      },
      {
        label: "Aerospace",
        items: [
          "Flight Controls",
          "Propulsion Systems",
          "Aerodynamics",
          "Aircraft Design",
          "Actuator Sizing",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Verification, Validation & Certification",
    groups: [
      {
        label: "Standards",
        items: ["ARP4754A", "ARP4761", "DO-160", "DO-178C", "DO-254"],
      },
      {
        label: "Activities",
        items: [
          "V&V Planning",
          "Test Campaign Management",
          "AFHA / SFHA / PSSA / FMEA",
          "Supplier Management",
          "Transport Canada Certification",
          "Regulatory Documentation",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Software & Tools",
    groups: [
      {
        label: "Programming",
        items: ["Python", "C++", "MATLAB", "Simulink", "VBA", "JavaScript"],
      },
      {
        label: "Platforms",
        items: ["CATIA", "SolidWorks", "Simcenter Amesim", "Ansys"],
      },
    ],
  },
  {
    id: 4,
    title: "Languages",
    groups: [
      {
        label: "Fluent",
        items: ["English", "French", "Arabic"],
      },
    ],
  },
];

const SkillBox = ({ title, groups }) => (
  <article className="bg-gray-800 p-4 sm:p-5 rounded-lg shadow-md hover:bg-brand-secondary/10 transition-colors duration-150">
    <header>
      <h3 className="text-sm sm:text-base font-semibold mb-3 text-brand-secondary">{title}</h3>
    </header>

    <div className="space-y-4 text-left">
      {groups.map((grp, i) => (
        <div key={i}>
          <div className="text-gray-400 text-xs mb-2 uppercase tracking-wide">{grp.label}</div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1">
            {grp.items.map((it, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-200 text-xs sm:text-sm leading-snug">
                <FiCheck className="mt-0.5 flex-none text-brand-secondary" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </article>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden flex flex-col items-center text-white px-4 py-24 sm:py-32"
    >
      <div className="absolute z-0 w-64 h-32 sm:w-80 sm:h-36 bg-brand-secondary rounded-full blur-3xl opacity-40 top-10 left-1/2 transform -translate-x-1/2" />

      <div data-aos="fade-up" data-aos-delay="300" className="relative z-20 w-full max-w-6xl space-y-8">
        <header className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Skills <span className="text-brand-secondary">and Expertise</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm max-w-xl mx-auto">
            Aerospace systems engineering, avionics integration, and software tooling across
            major commercial and regional aircraft programs.
          </p>
        </header>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {categories.map((cat) => (
            <SkillBox key={cat.id} title={cat.title} groups={cat.groups} />
          ))}
        </div>
      </div>
    </section>
  );
}
