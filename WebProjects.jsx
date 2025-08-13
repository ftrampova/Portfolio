import { useState, useEffect, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ExpandableProjectCard from "../../components/ExpandableProjectCard";
import hospitalImg from "../../components/images/hospital.jpg";
import handImg3 from "../../components/images/mockup3.png";
import handImg4 from "../../components/images/mockup4.png";

const webProjects = [
  {
    title: "Болнична информационна система",
    description:
      "Комплексна уеб-базирана система за управление на болници, разработена с PHP, MySQL, HTML/CSS и JavaScript. Предлага ролево-базирано удостоверяване, управление на пациенти, планиране на прегледи и административни функции за медицински учреждения.",
    technologies: [
      "Frontend: HTML5",
      "CSS3",
      "JavaScript",
      "Backend: PHP",
      "Database: MySQL (phpMyAdmin)",
      "Architecture: MVC Pattern",
      "Security: Session management, Input validation"
    ],
    features: [
      "Role-based Access Control – 5 потребителски роли с различни права",
      "Patient Management System – регистрация, профили, медицинска история",
      "Appointment Scheduling – система за записване на часове",
      "Room & Department Management – управление на стаи и отделения",
      "Admin Dashboard – пълен контрол над системата",
      "Data Security – защитени потребителски данни"
    ],
    github: "https://github.com/твоя-гитхъб-профил/hospital-management-system",
    demo: "http://estetikmed.atwebpages.com/",
    image: hospitalImg,
    overlayImage: handImg3,
    overlayImage2: handImg4
  }
];

const ScrollFadeIn = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition duration-700 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

const WebProjects = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1a202c] text-white flex flex-col relative animate-fadeIn">
      <header className="w-full bg-[#f97316] h-40 relative flex items-center justify-center px-6">
        <button
          onClick={() => navigate("/")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-[#1a202c] flex items-center justify-center"
          title="Назад"
        >
          <FaArrowLeft className="text-white text-lg" />
        </button>
        <h2 className="text-2xl md:text-3xl font-bold text-white px-16 text-center">
          Уеб приложения и системи
        </h2>
      </header>

      <section className="p-16 max-w-7xl mx-auto flex flex-wrap gap-20 gap-y-12 justify-center relative">
        {webProjects.map((project, index) => (
          <div key={index} className="relative w-full flex flex-col items-center">
            {project.title === "Болнична информационна система" && (
              <>
                <img
                  src={project.overlayImage}
                  alt="Project overlay right"
                  className="absolute w-[500px] h-auto z-20 pointer-events-none block top-[750px] right-[-80px] sm:top-[450px] sm:right-[-150px] sm:w-[550px] md:top-[400px] md:right-[-200px] md:w-[600px] lg:top-[-200px] lg:right-[-350px] lg:w-[600px] xl:right-[-600px] xl:top-[-180px] xl:w-[700px]"
                />
                <img
                  src={project.overlayImage2}
                  alt="Project overlay left"
                  className="hidden absolute left-[-400px] top-0 w-[400px] h-auto z-20 pointer-events-none xl:left-[-600px] xl:w-[700px] lg:w-[400px] lg:left-[-300px] lg:top-[50px] lg:block"
                />
              </>
            )}

            <ExpandableProjectCard
              project={project}
              isOpen={activeIndex === index}
              onToggle={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />

            <div className="flex gap-4 mt-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 mt-4 font-semibold text-white bg-[#f97316] rounded-full shadow-md hover:bg-[#2d3748] hover:scale-105 transform transition-all duration-300"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 mt-4 font-semibold text-white bg-[#f97316] rounded-full shadow-md hover:bg-[#2d3748] hover:scale-105 transform transition-all duration-300"
                >
                  Демо
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {webProjects[activeIndex] && (
        <div className="project-info-wrapper flex justify-center px-8 py-8 mb-[60px] relative">
          <div className="project-info w-full max-w-6xl xl:max-w-7xl text-white break-words relative z-10 flex flex-col gap-6">
            <ScrollFadeIn>
              <div className="bg-[#f97316] p-6 rounded-xl ">
                <h4 className="text-2xl font-bold mb-2">Цел:</h4>
                <p>{webProjects[activeIndex].description}</p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <div className="bg-[#f97316] p-6 rounded-xl ">
                <h4 className="text-2xl font-bold mb-2">Технически стек:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {webProjects[activeIndex].technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <div className="bg-[#f97316] p-6 rounded-xl ">
                <h4 className="text-2xl font-bold mb-2">Ключови функционалности:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {webProjects[activeIndex].features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <div className="bg-[#f97316] p-6 rounded-xl">
                <h4 className="text-2xl font-bold mb-4">Примерни акаунти за вход</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    {
                      role: "👨‍💼 Administrator",
                      email: "Ivana@example.com",
                      password: "Ivana888",
                      note: "Full system access"
                    },
                    {
                      role: "👨‍⚕️ Doctor",
                      email: "john.doe@example.com",
                      password: "12345678",
                      note: "Patient management & scheduling"
                    },
                    {
                      role: "👩‍⚕️ Nurse",
                      email: "AnetaI@example.com",
                      password: "AniAniAni",
                      note: "Patient care coordination"
                    },
                    {
                      role: "🧑‍🤝‍🧑 Patient",
                      email: "patient@hospital.demo",
                      password: "patient123",
                      note: "Appointment booking & records"
                    }
                  ].map((user, i) => (
                    <div
                      key={i}
                      className="bg-white text-[#1a202c] rounded-xl p-4 w-[250px] flex-shrink-0"
                    >
                      <h5 className="font-bold text-lg mb-1">{user.role}</h5>
                      <p>Email: {user.email}</p>
                      <p>Password: {user.password}</p>
                      <em className="text-sm block mt-1">{user.note}</em>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebProjects;
