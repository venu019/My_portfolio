
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import SkillsSection from '@/components/SkillsSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Sample projects data
  const featuredProjects = [
    {
      id: 'ecommerce',
      title: 'E-Commerce Website Using MERN Stack',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT']
    },
    {
      id: 'comments',
      title: 'Detection of Abusive Comments in Social Media',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Deep Learning']
    }
  ];

  const programmingLanguages = ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'];
  const webDevelopmentSkills = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Redux'];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-portfolio-dark-blue to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Venu Gopal Chelliboyina
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Full-Stack Developer specializing in MERN Stack and Machine Learning applications.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild variant="outline" className="bg-transparent border-white hover:bg-white hover:text-portfolio-dark-blue">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild className="bg-portfolio-blue hover:bg-blue-600">
              <Link to="/projects">View My Work</Link>
            </Button>
          </div>
          
          <a href="#featured-work" className="flex flex-col items-center mt-16 text-white/80 hover:text-white animate-bounce">
            <span className="mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </section>

      {/* Academic Background Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="My Education" title="Academic Background" />
          
          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-portfolio-blue pl-6 py-4 mb-8">
              <h3 className="text-2xl font-semibold">
                Sagi Ramakrishnam Raju Engineering College Bhimavaram, AP
              </h3>
              <p className="text-gray-500">Jun 2021 - May 2024</p>
              <p className="text-lg mt-1">B.Tech in Information Technology</p>
            </div>
            
            <div className="border-l-4 border-portfolio-blue pl-6 py-4 mb-8">
              <h3 className="text-2xl font-semibold">
                Smt.B.Seetha Polytechnic Bhimavaram, AP
              </h3>
              <p className="text-gray-500">Jun 2018 - Apr 2021</p>
              <p className="text-lg mt-1">Diploma in Computer Engineering</p>
            </div>
            
            <div className="border-l-4 border-portfolio-blue pl-6 py-4 mb-8">
              <h3 className="text-2xl font-semibold">
                Gitanjali Grammar School Dhone, AP
              </h3>
              <p className="text-gray-500">Apr 2018</p>
              <p className="text-lg mt-1">SSC</p>
            </div>
          </div>
        </div>
      </section>

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
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/about">View Full Résumé</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="featured-work" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="My Projects" title="Featured Work" />
          
          <p className="text-center max-w-3xl mx-auto mb-12 text-portfolio-text-gray text-lg">
            Explore some of my recent projects. Each project represents unique challenges and solutions across different domains and technologies.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                image={project.image}
                technologies={project.technologies}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CS Concepts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">CS Concepts</h2>
          
          <div className="flex flex-wrap gap-3 max-w-3xl mx-auto">
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
          
          <p className="text-center max-w-3xl mx-auto mb-12 text-portfolio-text-gray text-lg">
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
            
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/skills">View All Skills</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Get In Touch" title="Contact Me" />
          
          <p className="text-center max-w-2xl mx-auto mb-12 text-lg text-portfolio-text-gray">
            I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out to me!
          </p>
          
          <div className="max-w-xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Hello, I'd like to discuss..."
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-portfolio-dark-blue hover:bg-portfolio-blue text-white py-3 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
