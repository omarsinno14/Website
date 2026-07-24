import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavbarLinks = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "About", link: "#about" },
  { id: 3, name: "Skills", link: "#skills" },
  { id: 4, name: "Projects", link: "#projects" },
  { id: 5, name: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-20 text-white"
      data-aos="fade-down"
      data-aos-delay="100"
    >
      <div className="container mx-auto flex items-center justify-between px-5 py-4">
        <a href="#home" className="text-2xl font-bold tracking-tight text-white">
          OS
        </a>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          <FiMenu className="w-7 h-7 text-white" />
        </button>

        <nav className="hidden md:flex items-center space-x-6">
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-brand-secondary text-base transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden bg-bg/95 backdrop-blur absolute top-0 left-0 w-full
        h-screen flex-col items-center justify-center space-y-8`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <FiX className="w-7 h-7" />
        </button>

        {NavbarLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="text-xl text-white hover:text-brand-secondary transition"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}
