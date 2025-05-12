
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  image: string;
  technologies: string[];
  id: string;
  description?: string;
}

const ProjectCard = ({ title, image, technologies, id, description }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8 group transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 transition-transform duration-300 group-hover:transform group-hover:translate-x-2">
        <h3 className="text-2xl font-semibold mb-4 transition-all group-hover:text-portfolio-blue">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-portfolio-dark-gray px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}
        
        <Link
          to={`/projects/${id}`}
          className="text-portfolio-blue hover:underline inline-block mt-2"
        >
          View Details &gt;
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
