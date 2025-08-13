import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ExpandableProjectCard from "../../components/ExpandableProjectCard";
import lifeBalanceImg from "../../components/images/LifeBalance.png";
import babysitterImg from "../../components/images/babysitter.png";
import handImg1 from "../../components/images/mockup1.png";
import handImg2 from "../../components/images/mockup2.png";

const figmaProjects = [
  {
    title: "LifeBalance",
    description:
      "Мобилно прилжение тип журнал, което позволява на потребителя да записва ежедневни мисли, цели и навици, както и да получава AI съвети за физическо и ментално здраве на база на записки.",
    technologies: ["Figma", "Mobile UI", "Design System"],
    image: lifeBalanceImg,
    demo: "https://www.figma.com/proto/lvCPNPxGUuPzLDPI3XOran/LifeBalance?...",
    overlayImage: handImg1, 
  },
  {
    title: "Babysitter",
    description:
      "Приложение за родители, които търсят лесен начин да намерят и резервират детегледачка.",
    technologies: ["Figma", "UX Design", "Web UI"],
    image: babysitterImg,
    demo: "https://www.figma.com/proto/oSMb8s1HpipkCICN8lWtGT/Babysitter-project?...",
    overlayImage: handImg2, 
  },
];

const FigmaProjects = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const activeProject = figmaProjects[activeIndex];

  return (
    <div className="min-h-screen bg-[#1a202c] text-white flex flex-col relative overflow-hidden">
      {/* Хедър */}
      <header className="w-full bg-[#f97316] h-40 relative flex items-center justify-center px-6">
        <button
          onClick={() => navigate("/")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-[#1a202c] flex items-center justify-center"
          title="Назад"
        >
          <FaArrowLeft className="text-white text-lg" />
        </button>
        <h2 className="text-2xl md:text-3xl font-bold text-white px-16 text-center">
          UI/UX Дизайн проекти
        </h2>
      </header>

      {/* Карти */}
      <section className="p-16 max-w-7xl mx-auto flex flex-wrap gap-20 gap-y-12 justify-center">
        {figmaProjects.map((project, index) => (
          <ExpandableProjectCard
            key={index}
            project={project}
            isOpen={activeIndex === index}
            onToggle={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          />
        ))}
      </section>

      {/* Информация за проекта */}
      {activeProject && (
        <div className="project-info-wrapper flex justify-center px-8 py-8 mb-[60px] relative">
          <div className="project-info w-full max-w-6xl sm:max-w-[400px] md:max-w-[500px] lg:max-w-[500px] xl:max-w-7xl bg-[#f97316] text-white p-6 px-6 sm:px-8 rounded-2xl shadow-[0_4px_12px_rgba(255,255,255,0.2)] break-words relative z-10">
            <h3 className="text-2xl font-bold mb-4">{activeProject.title}</h3>
            <p className="mb-4">{activeProject.description}</p>
            <div>
              <h4 className="font-semibold mb-2">Технологии:</h4>
              <ul className="list-disc list-inside">
                {activeProject.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Динамична overlay снимка */}
          <img
  src={activeProject.overlayImage}
  alt="Project overlay"
  className="
    absolute 
    right-[-20px] 
    bottom-[-70px] 
    w-[700px] 
    h-auto 
    z-20 
    pointer-events-none
 md:bottom-[-160px] 
    md:right-[-150px]

    lg:bottom-[-100px] 
    lg:right-[-90px]

    xl:bottom-[-100px] 
    xl:right-[-90px]
  "
/>
        </div>
      )}
    </div>
  );
};

export default FigmaProjects;
