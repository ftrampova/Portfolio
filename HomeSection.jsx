import React from 'react';
import Navbar from '../components/Navbar';
import profileImage from '../components/images/fatme.jpg';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import './HomeSection.css';

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row min-h-screen"
    >
      {/* Orange Section */}
      <div
        className="home-orange text-white flex flex-col items-center justify-center px-6 py-10 relative z-10"
        style={{ backgroundColor: '#f97316' }}
      >
        {/* Навбар за мобилен изглед */}
        <div className="home-navbar mobile-navbar">
          <Navbar />
        </div>

        {/* Текстово съдържание */}
        <div className="home-orange-content max-w-xl text-center">
          <p className="text-lg text-gray-100 mb-2">Мениджър Уебсайт</p>
          <h1 className="home-orange-title font-bold mb-6">Фатме Трампова</h1>
          <p className="home-orange-text text-2xl text-gray-100 mb-8 leading-relaxed">
            Информатик с опит в уеб поддръжка, UI прототипиране (Figma) и
            създаване на дигитално съдържание.
          </p>

          <div className="home-buttons flex justify-center gap-4">
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 font-semibold px-6 py-2 rounded-full transition-all">
              Изтегли CV
            </button>
            <a
              href="https://www.linkedin.com/in/fatme-trampova"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-500 font-semibold px-6 py-2 rounded-full hover:bg-orange-200 transition-all flex items-center justify-center"
            >
              Контакт
            </a>
          </div>
        </div>
      </div>

      {/* Gray Section */}
      <div
        className="home-gray text-white flex flex-col px-6 py-8 relative z-10"
        style={{ backgroundColor: '#0F172A' }}
      >
        {/* Навбар за десктоп/таблет */}
        <div className="home-navbar desktop-navbar w-full mb-4">
          <Navbar />
        </div>

        <div
          className="home-gray-name text-center mb-4"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Fatme Trampova
        </div>

        <div className="home-socials flex gap-6 text-2xl justify-center">
          <a
            href="https://www.instagram.com/f.trampova"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/fatme-trampova"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="home-profile-image">
        <img
          src={profileImage}
          alt="Fatme Trampova"
          className="home-profile-img"
        />
      </div>
    </section>
  );
}
