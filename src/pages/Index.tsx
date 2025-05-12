
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import SkillsSection from '@/components/SkillsSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Sample projects data
  const featuredProjects = [
    {
      id: 'ecommerce',
      title: 'E-Commerce Website Using MERN Stack',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      description: 'Designed an admin panel to manage products, delivery status and carousel images, reducing admin task time by 35%. Built a user-friendly interface with product filtering, cart, and review features, boosting user engagement by 40%.'
    },
    {
      id: 'comments',
      title: 'Detection of Abusive Comments in Social Media',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Deep Learning'],
      description: 'Developed machine learning models to classify social media comments into \'hate speech,\' \'normal,\' and \'offensive,\' improving content moderation accuracy by 30%.'
    },
    {
      id: 'devops',
      title: 'DevOps Capstone Project',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      technologies: ['Flask', 'Docker', 'Kubernetes', 'GitHub Workflows', 'Tekton', 'OpenShift'],
      description: 'Developed a Flask app and deployed using Docker and Kubernetes, automating CI/CD with GitHub Workflows, Tekton, and OpenShift, reducing deployment time by 50%.'
    },
    {
      id: 'portfolio',
      title: 'Personal Portfolio Website',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'TypeScript'],
      description: 'Designed and developed a personal portfolio website using React, Tailwind CSS, and TypeScript.'
    }
  ];

  const programmingLanguages = ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'];
  const webDevelopmentSkills = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Redux'];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />

      {/* Work Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="My Experience" title="Work Experience" />
          
          <div className="max-w-3xl mx-auto">
            <ExperienceCard
              title="Java Full-Stack Internship"
              timeline="Jul 2023 - Sep 2023"
              company="Henotic Technology Pvt Ltd"
              description="Designed a real-time web application, enhancing customer satisfaction by 30% and optimizing server-side logic and database interactions using Java and MySQL, reducing response time by 20%."
            />
            
            <ExperienceCard
              title="Machine Learning Internship"
              timeline="Jul 2022 - Sep 2022"
              company="Henotic Technology Pvt Ltd"
              description="Gained hands-on experience in the end-to-end development and deployment of machine learning models, leveraging TensorFlow and industry-standard libraries to optimize the entire ML lifecycle."
            />
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="My Projects" title="Featured Work" />
          
          <p className="text-center max-w-3xl mx-auto mb-12 text-lg text-portfolio-text-gray">
            Explore some of my recent projects. Each project represents unique challenges and solutions across different domains and technologies.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredProjects.map((project) => (
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

      {/* CS Concepts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">CS Concepts</h2>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            <span className="bg-gray-100 text-portfolio-blue px-4 py-2 rounded-full">
              Data Structures & Algorithms
            </span>
            <span className="bg-gray-100 text-portfolio-blue px-4 py-2 rounded-full">
              Machine Learning
            </span>
            <span className="bg-gray-100 text-portfolio-blue px-4 py-2 rounded-full">
              Cloud Computing
            </span>
            <span className="bg-gray-100 text-portfolio-blue px-4 py-2 rounded-full">
              Computer Networks
            </span>
          </div>
        </div>
      </section>

      {/* Skills Section Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="My Skills" title="Technical Expertise" />
          
          <p className="text-center max-w-3xl mx-auto mb-12 text-lg text-portfolio-text-gray">
            I've worked with a variety of technologies and tools throughout my education and projects. Here's an overview of my technical skills and expertise.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <SkillsSection
              title="Programming Languages"
              skills={programmingLanguages}
            />
            
            <SkillsSection
              title="Web Development"
              skills={webDevelopmentSkills}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Get In Touch" title="Contact Me" />
          
          <p className="text-center max-w-2xl mx-auto mb-12 text-lg text-portfolio-text-gray">
            I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out to me!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Social Media Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <a href="mailto:venugopalchelliboyina@gmail.com" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="bg-gray-100 p-4 rounded-full mb-3">
                    <Mail size={24} className="text-portfolio-blue" />
                  </div>
                  <span className="text-sm">Email</span>
                </a>
                
                <a href="https://linkedin.com/in/chelliboyina-venu-gopal-b90420233" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="bg-gray-100 p-4 rounded-full mb-3">
                    <Linkedin size={24} className="text-portfolio-blue" />
                  </div>
                  <span className="text-sm">LinkedIn</span>
                </a>
                
                <a href="https://github.com/venu019" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="bg-gray-100 p-4 rounded-full mb-3">
                    <Github size={24} className="text-portfolio-blue" />
                  </div>
                  <span className="text-sm">GitHub</span>
                </a>
                
                <a href="https://instagram.com" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="bg-gray-100 p-4 rounded-full mb-3">
                    <Instagram size={24} className="text-portfolio-blue" />
                  </div>
                  <span className="text-sm">Instagram</span>
                </a>
                
                <a href="tel:+919705506233" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="bg-gray-100 p-4 rounded-full mb-3">
                    <Phone size={24} className="text-portfolio-blue" />
                  </div>
                  <span className="text-sm">Phone</span>
                </a>
                
                <a href="https://wa.me/919705506233" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="bg-gray-100 p-4 rounded-full mb-3">
                    <WhatsApp size={24} className="text-portfolio-blue" />
                  </div>
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone size={20} className="text-portfolio-blue mr-3" />
                    <span>+91 9705506233</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail size={20} className="text-portfolio-blue mr-3" />
                    <span>venugopalchelliboyina@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Github size={20} className="text-portfolio-blue mr-3" />
                    <span>github.com/venu019</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin size={20} className="text-portfolio-blue mr-3" />
                    <span className="break-all">linkedin.com/in/chelliboyina-venu-gopal-b90420233</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
