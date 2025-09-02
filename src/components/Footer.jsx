import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-3xl font-bold italic mb-3 md:mb-0">Portfolio</h1>

        <p className="text-sm text-white/90 text-center md:text-left">
          © {year} My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
