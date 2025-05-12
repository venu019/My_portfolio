
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';

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
  const csConcepts = ['Data Structures & Algorithms','Machine Learning','Cloud Computing','Computer Network'];

  // Handle email submission
  const handleEmailSubmit = (formData: any) => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
    );
    
    window.location.href = `mailto:venugopalchelliboyina@gmail.com?subject=${subject}&body=${body}`;
    toast.success('Email client opened! Send your message when ready.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Education Section */}
      <section id="education" className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="My Education" title="Academic Background" />
          
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-md mb-8">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="My Experience" title="Work Experience" />
          
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
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
              </CardContent>
            </Card>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-7xl">
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

      {/* Skills Section Preview */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="My Skills" title="Technical Expertise" />
          
          <p className="text-center max-w-3xl mx-auto mb-12 text-lg text-portfolio-text-gray">
            I've worked with a variety of technologies and tools throughout my education and projects. Here's an overview of my technical skills and expertise.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-portfolio-blue px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {webDevelopmentSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-portfolio-blue px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Database & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {databaseAndTools.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-portfolio-blue px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>CS Concepts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {csConcepts.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-portfolio-blue px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
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
            <div className="md:w-3/10 w-full">
              <Card className="h-full shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-center">Connect with me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <a href="mailto:venugopalchelliboyina@gmail.com" className="hover:bg-gray-100 p-2 rounded-full transition flex justify-center">
                      <div className="bg-portfolio-dark-blue p-4 rounded-full">
                        <Mail size={24} className="text-white" />
                      </div>
                    </a>

                    <a href="https://linkedin.com/in/chelliboyina-venu-gopal-b90420233" className="hover:bg-gray-100 p-2 rounded-full transition flex justify-center">
                      <div className="bg-portfolio-dark-blue p-4 rounded-full">
                        <Linkedin size={24} className="text-white" />
                      </div>
                    </a>

                    <a href="https://github.com/venu019" className="hover:bg-gray-100 p-2 rounded-full transition flex justify-center">
                      <div className="bg-portfolio-dark-blue p-4 rounded-full">
                        <Github size={24} className="text-white" />
                      </div>
                    </a>

                    <a href="https://instagram.com" className="hover:bg-gray-100 p-2 rounded-full transition flex justify-center">
                      <div className="bg-portfolio-dark-blue p-4 rounded-full">
                        <Instagram size={24} className="text-white" />
                      </div>
                    </a>

                    <a href="https://wa.me/919705506233" className="hover:bg-gray-100 p-2 rounded-full transition flex justify-center">
                      <div className="bg-portfolio-dark-blue p-4 rounded-full">
                        <MessageSquare size={24} className="text-white" />
                      </div>
                    </a>

                    <a href="tel:+919705506233" className="hover:bg-gray-100 p-2 rounded-full transition flex justify-center">
                      <div className="bg-portfolio-dark-blue p-4 rounded-full">
                        <Phone size={24} className="text-white" />
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Send me a message Card */}
            <div className="md:w-7/10 w-full">
              <Card className="h-full shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-center">Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm onSubmit={handleEmailSubmit} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
