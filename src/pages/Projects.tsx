
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
      description: 'Designed an admin panel to manage products, delivery status and carousel images, reducing admin task time by 35%. Built a user-friendly interface with product filtering, cart, and review features, boosting user engagement by 40%. Integrated JWT-based authentication for secure access and optimized page performance with Redux, cutting page reload times by 20%.'
    },
    {
      id: 'comments',
      title: 'Detection of Abusive Comments in Social Media',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Deep Learning'],
      description: 'Developed machine learning models to classify social media comments into \'hate speech,\' \'normal,\' and \'offensive,\' improving content moderation accuracy by 30%. Implemented BERT, a transformer-based language model, for text classification, achieving 76.82% accuracy.'
    },
    {
      id: 'devops',
      title: 'DevOps Capstone Project',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      technologies: ['Flask', 'Docker', 'Kubernetes', 'GitHub Workflows', 'Tekton', 'OpenShift'],
      description: 'Developed a Flask app and deployed using Docker and Kubernetes, automating CI/CD with GitHub Workflows, Tekton, and OpenShift, reducing deployment time by 50%. Automated environment setup with Bash scripts, cutting setup time by 40% and ensuring consistency. Adopted Agile methodologies via GitHub Kanban board, improving sprint completion speed and team collaboration.'
    },
    {
      id: 'portfolio',
      title: 'Personal Portfolio Website',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'TypeScript'],
      description: 'Designed and developed a personal portfolio website using React, Tailwind CSS, and TypeScript. The website showcases my skills, projects, and experience in a responsive and modern design.'
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                image={project.image}
                technologies={project.technologies}
                description={project.description}
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
