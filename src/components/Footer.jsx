import React from "react";
import linkedin from "/linkedin.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border text-white">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-lg font-semibold">Omar Sinno</p>
          <p className="text-sm text-gray-400">Avionics Integration Engineering Professional</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/omar-sinno-70235b238/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedin} alt="LinkedIn" className="w-7 h-7 opacity-80 hover:opacity-100 transition" />
          </a>
          <a
            href="mailto:o.sinno@outlook.com"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            o.sinno@outlook.com
          </a>
        </div>

        <p className="text-xs text-gray-500">© {year} Omar Sinno. All rights reserved.</p>
      </div>
    </footer>
  );
}
