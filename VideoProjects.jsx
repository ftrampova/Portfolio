import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const videoProjects = [
  {
    title: "Кампания за социални мрежи",
    description: "Кратко видео за осведоменост относно психичното здраве.",
    technologies: ["Premiere Pro", "After Effects", "Storytelling"],
    github: "",
    demo: "",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
  },
  {
    title: "TikTok рекламно видео",
    description: "Реклама за лятна кампания на локален бизнес.",
    technologies: ["CapCut", "Motion Design", "Trendy edits"],
    github: "",
    demo: "",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
  },
  {
    title: "Instagram Reel",
    description: "Вдъхновяващо видео за личностно развитие.",
    technologies: ["Reels", "Quick cuts", "Viral formats"],
    video: "https://www.youtube.com/embed/W8cybMbjIVo?si=mpcstaN3LAhQn4Sf"
  }
];

const ExpandableVideoCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-md">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="mb-2 text-gray-700">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="bg-orange-100 text-orange-600 text-sm px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.video && (
        <div className="relative w-full pt-[56.25%] mb-4">
          {!playVideo ? (
            <div
              className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center cursor-pointer"
              onClick={() => setPlayVideo(true)}
            >
              <FaPlay className="text-white text-4xl" />
            </div>
          ) : (
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={project.video}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      )}

      <button
        className="text-orange-600 underline text-sm"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Скрий детайли" : "Виж повече"}
      </button>

      {isExpanded && (
        <div className="mt-4 text-sm text-gray-600">
          <p>GitHub: {project.github ? project.github : "Няма код"}</p>
          <p>Demo: {project.demo ? project.demo : "Няма демо линк"}</p>
        </div>
      )}
    </div>
  );
};

const VideoProjects = () => {
  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Креативни видео проекти</h2>
      <div className="space-y-6">
        {videoProjects.map((project, index) => (
          <ExpandableVideoCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default VideoProjects;
