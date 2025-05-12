import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  image: string;
  technologies: string[];
  id: string;
  description?: string;
  features?: string[];
  challenges?: string[];
  outcome?: string;
  githubLink: string;
}

const ProjectCard = ({ 
  title, 
  image, 
  technologies, 
  description,
  features,
  challenges,
  outcome,
  githubLink 
}: ProjectCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      {/* Main Card */}
      <Card className="bg-white rounded-lg overflow-hidden shadow-md mb-8 group transition-all duration-300 hover:shadow-lg">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <CardHeader>
          <CardTitle className="transition-all group-hover:text-portfolio-blue">{title}</CardTitle>
        </CardHeader>

        <CardContent>
          <button
            onClick={() => setShowDetails(true)}
            className="text-portfolio-blue hover:underline inline-block mt-2"
          >
            View Details &gt;
          </button>
        </CardContent>
      </Card>

      {/* Modal Popup */}
      {showDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4 p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowDetails(false)}
            >
              ✕
            </button>

            {/* Project Image */}
            <img 
              src={image} 
              alt={title}
              className="w-full h-64 object-cover rounded-lg mb-6 mt-10"  // Added margin-top to move image down
            />

            {/* Project Title */}
            <h2 className="text-2xl font-bold mb-2">{title}</h2>

            {/* Technologies */}
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

            {/* Description */}
            {description && (
              <p className="text-gray-700 mb-6">{description}</p>
            )}

            {/* Features */}
            {features && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Features</h3>
                <ul className="list-disc space-y-1 pl-5">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {challenges && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                <ul className="list-disc space-y-1 pl-5">
                  {challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Outcome */}
            {outcome && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Outcome</h3>
                <p className="text-gray-700">{outcome}</p>
              </div>
            )}

            {/* GitHub Button */}
            <div className="mt-6">
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-portfolio-dark-blue text-white hover:bg-white hover:text-portfolio-dark-blue transition-colors duration-300 p-2 rounded-lg text-center block"
              >
                See Code on GitHub
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
