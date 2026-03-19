import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Lucky.dev</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>

          <a href="#skills" className="hover:text-blue-600">
            Skills
          </a>

          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu with transition */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md px-6 flex flex-col gap-4 items-center overflow-hidden transform transition-all duration-100 ease-in-out
        ${
          menuOpen
            ? "h-40 opacity-300 translate-y-0 py-4"
            : "h-0 opacity-0 -translate-y-2"
        }`}
      >
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>

        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  );
}
