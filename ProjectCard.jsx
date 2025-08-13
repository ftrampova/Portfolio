export default function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white rounded shadow p-6">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        View Project
      </a>
    </div>
  );
}