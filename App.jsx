// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import WebProjects from './pages/projects/WebProjects';
import FigmaProjects from './pages/projects/FigmaProjects';
import VideoProjects from './pages/projects/VideoProjects';
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Начална страница */}
        <Route path="/" element={
          <>
            <HomeSection />
            <ProjectsSection />
            {/* Заменил съм временната about секция с истинската AboutSection компонента */}
            <section id="about">
              <AboutSection />
              <Footer />
            </section>
          </>
        } />

        {/* Страница за уеб проекти */}
        <Route path="/projects/web" element={<WebProjects />} />
        <Route path="/projects/figma" element={<FigmaProjects />} />
        <Route path="/projects/video" element={<VideoProjects />} />
      </Routes>
    </Router>
  );
}