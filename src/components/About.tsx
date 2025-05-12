
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-10 px-4 md:px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-portfolio-blue font-medium mb-2 text-center">About Me</h2>
        <h3 className="text-3xl font-bold mb-8 text-center">Get to know me</h3>
        
        <div className="w-full mb-8">
          <div className="h-1 w-20 bg-portfolio-blue mx-auto"></div>
        </div>
        
        <div className="w-full rounded-xl overflow-hidden mb-8">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
            alt="Developer working" 
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
        
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            I'm an aspiring Full-Stack Developer with a strong foundation in MERN Stack development and Machine Learning. 
            I'm passionate about creating efficient, user-friendly applications that solve real-world problems.
          </p>
          
          <p>
            Currently completing my B.Tech in Information Technology at Sagi Ramakrishnam Raju Engineering College. 
            I have practical experience through academic projects and internships in Java Full-Stack and Machine Learning.
          </p>
          
          <div className="mt-8">
            <Button className="bg-portfolio-dark-blue hover:bg-portfolio-blue text-white px-8 py-6">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
