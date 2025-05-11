
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import SkillsSection from '@/components/SkillsSection';

const Skills = () => {
  const programmingLanguages = ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'];
  const webDevelopment = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Redux'];
  const databaseTools = ['MySQL', 'MongoDB', 'GitHub', 'Docker', 'Kubernetes'];
  const machineLearning = ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'];
  const cloudPlatforms = ['AWS', 'Azure', 'Google Cloud', 'Heroku'];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-portfolio-dark-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">My Skills</h1>
          <p className="text-xl max-w-3xl">
            Explore my technical expertise across various programming languages, frameworks, and tools.
          </p>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16">
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
              skills={webDevelopment}
            />
            
            <SkillsSection
              title="Database & Tools"
              skills={databaseTools}
            />
            
            <SkillsSection
              title="Machine Learning"
              skills={machineLearning}
            />
            
            <SkillsSection
              title="Cloud Platforms"
              skills={cloudPlatforms}
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Skills;
