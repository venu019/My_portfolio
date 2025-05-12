
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import SkillsSection from '@/components/SkillsSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import { ArrowDown, Mail, Linkedin, Github, Instagram, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import EducationCard from '@/components/EducationCard';

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
    }
  ];

  const programmingLanguages = ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'];
  const webDevelopmentSkills = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Redux'];
  const databaseAndTools = ['MYSQL', 'MongoDB', 'GitHub', 'Docker' , 'Kubernetes'];
  const csConcepts = ['Data Structures & Algorithms','Machine Learning','Cloud Computing','Computer Network']

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />

      {/* Education Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="My Education" title="Academic Background" />
          
          <div className="max-w-3xl mx-auto">
            <EducationCard
              school = "Sagi Ramakrishnam Raju Engineering College bhimavaram,AP" 
              degree ="B.Tech in Information Technology"
              timeline ="Jun 2021 - May 2024"
              location ="" 
              gpa=''
            />
            <EducationCard
              school = "Smt.B.Seetha Polytechnic bhimavaram,AP" 
              degree ="Diploma in Computer Engineering"
              timeline ="Jun 2018 - May 2021"
              location ="" 
              gpa=''
            />
            <EducationCard
              school = "Gitanjali Grammar High School Dhone,AP" 
              degree ="SSC"
              timeline ="May 2018"
              location ="" 
              gpa=''
            />
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
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="My Projects" title="Featured Work" />
          
          <p className="text-center max-w-3xl mx-auto mb-12 text-lg text-portfolio-text-gray">
            Explore some of my recent projects. Each project represents unique challenges and solutions across different domains and technologies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto w-full justify-items-center">
            {featuredProjects.map((project) => (
              <div className="flex-shrink-0 w-[300px] md:w-[400px]"> {/* Control each card width */}
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  image={project.image}
                  technologies={project.technologies}
                  description={project.description}
                />
              </div>
            ))}
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
          <div className="max-w-6xl mx-auto flex flex-wrap gap-8">
            <div className="flex-1 min-w-[300px]">
              <SkillsSection
                title="Programming Languages"
                skills={programmingLanguages}
              />
              <SkillsSection
                title="Web Development"
                skills={webDevelopmentSkills}
              />
            </div>
            <div className="flex-1 min-w-[300px]">
              <SkillsSection
                title="Database & Tools"
                skills={databaseAndTools}
              />
              <SkillsSection
                title="CS Concepts"
                skills={csConcepts}
              />
            </div>
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

          <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto w-full">
            {/* Left Side - Connect with me Card */}
            {/* <div className="md:w-2/5 bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center"> */}
            <div className="md:w-2/5 h-48 bg-white rounded-2xl shadow-md p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-semibold mb-6 text-center">Connect with me</h3>

              <div className="flex justify-center items-center gap-4">
                <a href="mailto:venugopalchelliboyina@gmail.com" className="hover:bg-gray-100 p-2 rounded-full transition">
                  <Mail size={28} className="text-portfolio-dark-blue" />
                </a>

                <a href="https://linkedin.com/in/chelliboyina-venu-gopal-b90420233" className="hover:bg-gray-100 p-2 rounded-full transition">
                  <Linkedin size={28} className="text-portfolio-dark-blue" />
                </a>

                <a href="https://github.com/venu019" className="hover:bg-gray-100 p-2 rounded-full transition">
                  <Github size={28} className="text-portfolio-dark-blue" />
                </a>

                <a href="https://instagram.com" className="hover:bg-gray-100 p-2 rounded-full transition">
                  <Instagram size={28} className="text-portfolio-dark-blue" />
                </a>

                <a href="https://wa.me/919705506233" className="hover:bg-gray-100 p-2 rounded-full transition">
                  <MessageSquare size={28} className="text-portfolio-dark-blue" />
                </a>
              </div>
            </div>

            {/* Right Side - Send me a message Card */}
            <div className="md:w-3/5 bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Send me a message</h3>

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
