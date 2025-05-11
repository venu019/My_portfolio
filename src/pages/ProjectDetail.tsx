
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features?: string[];
  challenges?: string[];
  outcome?: string;
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Sample project data
  const projects: { [key: string]: Project } = {
    'ecommerce': {
      id: 'ecommerce',
      title: 'E-Commerce Website Using MERN Stack',
      description: 'A full-featured e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with JWT authentication, product management, shopping cart functionality, and order processing.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      features: [
        'User authentication and authorization with JWT',
        'Product catalog with search and filtering',
        'Shopping cart and checkout process',
        'Order history and tracking',
        'Admin dashboard for product management'
      ],
      challenges: [
        'Implementing a secure authentication system',
        'Creating a responsive design for all device sizes',
        'Optimizing database queries for performance',
        'Managing state across the application'
      ],
      outcome: 'Successfully delivered a functional e-commerce platform with all core features implemented. The application demonstrates secure user authentication, efficient data management, and a smooth user experience.'
    },
    'comments': {
      id: 'comments',
      title: 'Detection of Abusive Comments in Social Media',
      description: 'A machine learning project focused on identifying and filtering abusive comments in social media platforms using natural language processing and deep learning techniques.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Deep Learning'],
      features: [
        'Text preprocessing and cleaning',
        'Feature extraction from comment text',
        'Deep learning model for classification',
        'Real-time comment analysis',
        'Dashboard for monitoring and reporting'
      ],
      challenges: [
        'Handling imbalanced data sets',
        'Building efficient text processing pipelines',
        'Training models with limited computational resources',
        'Reducing false positives in detection'
      ],
      outcome: 'Developed a model with 92% accuracy in detecting abusive comments across multiple social media platforms. The system helped reduce the visibility of harmful content and improved user experience.'
    },
    'devops': {
      id: 'devops',
      title: 'DevOps Capstone Project',
      description: 'A comprehensive DevOps implementation for a web application, featuring continuous integration/continuous deployment (CI/CD) pipelines, containerization, and orchestration.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      technologies: ['Flask', 'Docker', 'Kubernetes', 'GitHub Workflows', 'Tekton', 'OpenShift'],
      features: [
        'Automated CI/CD pipeline',
        'Containerized application deployment',
        'Kubernetes orchestration',
        'Infrastructure as Code',
        'Monitoring and logging'
      ],
      challenges: [
        'Setting up efficient CI/CD workflows',
        'Managing container orchestration',
        'Implementing secure deployment strategies',
        'Ensuring high availability'
      ],
      outcome: 'Successfully implemented a complete DevOps pipeline that reduced deployment time by 75% and improved application reliability with automated testing and deployment.'
    }
  };
  
  const project = id ? projects[id] : null;
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-6">The project you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/projects">Back to Projects</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/projects" className="inline-flex items-center text-portfolio-blue mb-6 hover:underline">
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>
        
        {/* Project Hero */}
        <div className="mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-portfolio-dark-gray px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <p className="text-lg text-gray-700">{project.description}</p>
        </div>
        
        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {project.features && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-portfolio-blue mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {project.challenges && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-portfolio-blue mr-2">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Project Outcome */}
        {project.outcome && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
            <p className="text-gray-700">{project.outcome}</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
