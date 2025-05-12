
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-10 px-4 md:px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-start">
          <p className="text-gray-600 dark:text-gray-300 mb-1">Hi there, I'm</p>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">
            Venu Gopal<br />Chelliboyina
          </h1>
          
          <p className="text-portfolio-blue text-lg md:text-xl font-medium mb-4">
            Full-Stack Developer with expertise<br />in MERN Stack and ML
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
            I design and build exceptional digital experiences with a focus on user-friendly 
            interfaces and efficient backend solutions. Currently exploring opportunities in tech.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button className="bg-portfolio-dark-blue hover:bg-portfolio-blue text-white px-8 py-6">
              <a href="#projects">View My Work</a>
            </Button>
            
            <Button variant="outline" className="border-gray-300 hover:bg-gray-100 px-8 py-6">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
