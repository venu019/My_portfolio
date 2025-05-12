
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const programmingLanguages = ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'];
  const webDevelopment = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Redux'];
  const databaseTools = ['MySQL', 'MongoDB', 'GitHub', 'Docker', 'Kubernetes'];
  const csConceptsSkills = ['Data Structures & Algorithms', 'Machine Learning', 'Cloud Computing', 'Computer Networks'];
  
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
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  {webDevelopment.map((skill, index) => (
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
                  {databaseTools.map((skill, index) => (
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
                  {csConceptsSkills.map((skill, index) => (
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
      
      <Footer />
    </div>
  );
};

export default Skills;
