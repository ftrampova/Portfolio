import { FaPlay } from "react-icons/fa";

const ExpandableProjectCard = ({ project, onToggle, isOpen }) => {
  return (
    <div className="relative">
      <div
        className="w-full md:w-[500px] bg-white rounded-xl overflow-hidden mt-4"
        style={{ boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)" }}
      >
        <div className="relative">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[300px] object-cover"
            />
          )}
          {project.demo && (
            <a
              href={project.demo}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition"
              title="Отвори демо"
            >
              <FaPlay className="text-black text-sm" />
            </a>
          )}
        </div>

        <div className="p-4 border-t" style={{ backgroundColor: "#Fb923c" }}>
          <h3 className="text-2xl font-semibold mb-2 text-white">
            {project.title}
          </h3>
          <p
            onClick={onToggle}
            className="text-sm cursor-pointer text-white hover:underline select-none"
          >
            {isOpen ? "Скрий описание" : "Виж повече"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpandableProjectCard;
