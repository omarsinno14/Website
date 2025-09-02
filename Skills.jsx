import React from "react";
import { FiCheck } from "react-icons/fi";
import vue from "/vue.png";
import icon_react from "/icon_react.png";
import tailwindcss from "/tailwindcss.png";
import laravel from "/laravel.png";
import img_about2 from "/img_about2.png";
import interpersonal from "/interpersonal.png";
import languages from "/languages.png";
import cert from "/cert.png";

const categories = [
  {
    id: 1,
    image: vue,
    title: "Applications",
    groups: [
      { label: "Microsoft 365", items: ["Word", "Excel", "PowerPoint", "SharePoint", "Teams", "OneNote", "Outlook"] },
      { label: "Google Workspace", items: ["Docs", "Sheets", "Slides", "Drive", "Meet"] },
    ],
  },
  {
    id: 2,
    image: icon_react,
    title: "Programming",
    groups: [
      { label: "Languages", items: ["C++", "Python", "VBA"] },
      { label: "Model-Based", items: ["MATLAB", "Simulink", "Amesim"] },
    ],
  },
  {
    id: 3,
    image: tailwindcss,
    title: "Platforms",
    groups: [
      { label: "CAD / PLM", items: ["CATIA", "Enovia", "AutoCAD", "SolidWorks"] },
      { label: "IDEs", items: ["Codelite", "Visual Studio"] },
    ],
  },
  {
    id: 4,
    image: laravel,
    title: "Technical Skills",
    groups: [
      { label: "Systems & Design", items: ["Aircraft Design", "Requirement Definition", "Aerodynamics", "Propulsion"] },
      { label: "Analysis & Build", items: ["Materials & Processes", "Manufacturing", "Data Visualization", "Tool Creation"] },
      { label: "Process", items: ["Project Management", "Procedure Writing"] },
    ],
  },
  {
    id: 5,
    image: interpersonal,
    title: "Interpersonal Skills",
    groups: [
      { label: "Collaboration", items: ["Communication", "Teamwork"] },
      { label: "Work Style", items: ["Time Management", "Flexibility", "Autonomy", "Problem Solving", "Load Management", "Operating Under Pressure"] },
    ],
  },
  {
    id: 6,
    image: languages,
    title: "Languages",
    groups: [{ label: "Fluent", items: ["French", "English", "Arabic"] }],
  },
  {
    id: 7,
    image: cert,
    title: "Licenses & Certifications",
    groups: [{ label: "Credentials", items: ["Student Pilot License", "Hazardous Waste Disposal"] }],
  },
];

const SkillBox = ({ image, title, groups }) => (
  <article className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md text-center hover:bg-brand-secondary/10 transition-colors duration-150">
    <figure className="flex justify-center mb-2">
      <img src={image} alt={title} className="w-10 h-10 sm:w-12 sm:h-12" />
    </figure>
    <header>
      <h3 className="text-sm sm:text-base font-semibold mb-2">{title}</h3>
    </header>

    <div className="space-y-3 text-left">
      {groups.map((grp, i) => (
        <div key={i}>
          <div className="text-gray-300 text-xs sm:text-sm mb-1">{grp.label}</div>
          {/* responsive two-column list on larger screens */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1">
            {grp.items.map((it, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-200 text-xs sm:text-sm leading-snug">
                <FiCheck className="mt-0.5 flex-none text-brand-secondary" />
                <span className="break-words">{it}</span>
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
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10"
    >
      <div className="absolute z-0 w-64 h-32 sm:w-80 sm:h-36 bg-brand-secondary rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2" />
      <img
        src={img_about2}
        alt="Left picture"
        className="absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-20 h-auto sm:w-28 opacity-70"
      />

      <div data-aos="fade-up" data-aos-delay="300" className="relative z-20 text-center space-y-5 sm:space-y-8">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My Expertise <br /> and <span className="text-brand-secondary">Skills</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm">
            Blending aerospace engineering with modern software. From CAD and MATLAB models to Python automation and well-documented artifacts.
          </p>
        </header>

        {/* compact grid of cards */}
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 mt-3"
        >
          {categories.map((cat) => (
            <SkillBox key={cat.id} image={cat.image} title={cat.title} groups={cat.groups} />
          ))}
        </section>
      </div>

      <img
        src={img_about2}
        alt="Right picture"
        className="absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-20 h-auto sm:w-28 opacity-70"
      />
    </section>
  );
}
