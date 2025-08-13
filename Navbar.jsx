import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="w-full relative z-50"> {/* !!! това е важно */}
      {/* Desktop menu */}
      <ul className="hidden lg:flex justify-center gap-6 text-xl font-medium text-white">
        <li>
          <a
            href="#home"
            onClick={(e) => handleScroll(e, 'home')}
            className="hover:text-orange-300 transition-colors border-b-2 border-transparent hover:border-orange-300"
          >
            Начало
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, 'projects')}
            className="hover:text-orange-300 transition-colors border-b-2 border-transparent hover:border-orange-300"
          >
            Проекти
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, 'about')}
            className="hover:text-orange-300 transition-colors border-b-2 border-transparent hover:border-orange-300"
          >
            За мен
          </a>
        </li>
      </ul>

      {/* Mobile & Tablet Hamburger Icon */}
      <div className="lg:hidden flex justify-end">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl z-50"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="absolute top-12 right-0 z-50 lg:hidden flex flex-col items-end gap-4 text-xl font-medium text-white bg-gray-800 p-4 rounded shadow-lg">
          <li>
            <a
              href="#home"
              onClick={(e) => handleScroll(e, 'home')}
              className="hover:text-orange-300 transition-colors"
            >
              Начало
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, 'projects')}
              className="hover:text-orange-300 transition-colors"
            >
              Проекти
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, 'about')}
              className="hover:text-orange-300 transition-colors"
            >
              За мен
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
