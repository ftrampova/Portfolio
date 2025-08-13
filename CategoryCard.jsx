import { Link } from "react-router-dom";
import './ProjectsSection.css';

const CategoryCard = ({ title, description, image, link }) => {
  return (
    <Link to={link} className="category-card">
      <div
        className="rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden flex flex-col"
        style={{
          backgroundColor: '#Fb923c',
          boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)' 
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-3/4 object-cover"
        />
        <div className="p-4 flex flex-col justify-start grow">
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
