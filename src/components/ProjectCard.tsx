
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ProjectCardProps {
  title: string;
  image: string;
  technologies: string[];
  id: string;
  description?: string;
  features?: string[];
  challenges?: string[];
  outcome?: string;
}

const ProjectCard = ({ 
  title, 
  image, 
  technologies, 
  description,
  features,
  challenges,
  outcome
}: ProjectCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <Card className="bg-white rounded-lg overflow-hidden shadow-md group transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="transition-all group-hover:text-portfolio-blue">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow flex flex-col justify-between">
        <button
          onClick={() => setShowDetails(true)}
          className="text-portfolio-blue hover:underline inline-block mt-2"
        >
          View Details &gt;
        </button>
      </CardContent>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-[70vh] overflow-y-auto p-2">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-lg"
            />
            
            <p className="text-gray-700">{description}</p>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">Technologies</h4>
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
            </div>
            
            {features && (
              <div>
                <h4 className="font-semibold text-lg mb-2">Features</h4>
                <ul className="space-y-1 list-disc pl-4">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {challenges && (
              <div>
                <h4 className="font-semibold text-lg mb-2">Challenges</h4>
                <ul className="space-y-1 list-disc pl-4">
                  {challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {outcome && (
              <div>
                <h4 className="font-semibold text-lg mb-2">Outcome</h4>
                <p>{outcome}</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ProjectCard;
