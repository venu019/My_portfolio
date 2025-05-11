
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  image: string;
  technologies: string[];
  id: string;
}

const ProjectCard = ({ title, image, technologies, id }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
      
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        
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
