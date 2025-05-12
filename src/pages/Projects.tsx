
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 'ecommerce',
      title: 'E-Commerce Website Using MERN Stack',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      description: 'A full-featured e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with JWT authentication, product management, shopping cart functionality, and order processing.',
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
    {
      id: 'comments',
      title: 'Detection of Abusive Comments in Social Media',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Deep Learning'],
      description: 'A machine learning project focused on identifying and filtering abusive comments in social media platforms using natural language processing and deep learning techniques.',
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
    {
      id: 'devops',
      title: 'DevOps Capstone Project',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      technologies: ['Flask', 'Docker', 'Kubernetes', 'GitHub Workflows', 'Tekton', 'OpenShift'],
      description: 'A comprehensive DevOps implementation for a web application, featuring continuous integration/continuous deployment (CI/CD) pipelines, containerization, and orchestration.',
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
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-portfolio-dark-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl max-w-3xl">
            Explore my portfolio of projects across different domains and technologies.
          </p>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading title="Featured Work" />
          
          <p className="text-center max-w-3xl mx-auto mb-12 text-lg text-portfolio-text-gray">
            Explore some of my recent projects. Each project represents unique challenges and solutions across different domains and technologies.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                image={project.image}
                technologies={project.technologies}
                description={project.description}
                features={project.features}
                challenges={project.challenges}
                outcome={project.outcome}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
