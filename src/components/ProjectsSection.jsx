import React from 'react';
import CategoryCard from './CategoryCard';
import webImage from '../components/images/web.jpg';
import figmaImage from '../components/images/figma.jpg';
import videoImage from '../components/images/video.jpg';
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
   <div className="projects-background">
   <section
  id="projects"
  className="projects-wrapper py-16 px-6"
>
  <h2 className="text-4xl font-bold text-center mb-14">Проекти</h2>
  <div className="projects-card-container">

   <CategoryCard 
      title="UI/UX дизайн"
      description="Figma концепции и прототипи"
      image={figmaImage}
      link="/projects/figma"
    />

    <CategoryCard 
      title="Уеб приложения и системи"
      description="Проекти с HTML, CSS, JS и PHP"
      image={webImage}
      link="/projects/web"
    />
 
   <CategoryCard
  title="Видеа за социални мрежи"
  description="Разгледай TikTok профила ->"
  image={videoImage}
  link="https://www.tiktok.com/@toolsbox.bg"
/>

  </div>
</section>
</div>
  );
};

export default ProjectsSection;
