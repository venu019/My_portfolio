
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import EducationCard from '@/components/EducationCard';
import ExperienceCard from '@/components/ExperienceCard';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-portfolio-dark-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl max-w-3xl">
            Learn more about my background, education, and professional experience.
          </p>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="My Education" title="Academic Background" />
          
          <div className="max-w-3xl mx-auto">
            <EducationCard
              school="Sagi Ramakrishnam Raju Engineering College Bhimavaram, AP"
              degree="B.Tech in Information Technology"
              timeline="Jun 2021 - May 2024"
              gpa="6.9"
            />
            
            <EducationCard
              school="Smt.B.Seetha Polytechnic Bhimavaram, AP"
              degree="Diploma in Computer Engineering"
              timeline="Jun 2018 - Apr 2021"
              gpa="80%"
            />
            
            <EducationCard
              school="Gitanjali Grammar School Dhone, AP"
              degree="SSC"
              timeline="Apr 2018"
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
              company="Henotic Technology Pvt Ltd"
              timeline="Jul 2023 - Sep 2023"
              description="Designed a real-time web application, enhancing customer satisfaction by 30% and optimizing server-side logic and database interactions using Java and MySQL, reducing response time by 20%."
            />
            
            <ExperienceCard
              title="Machine Learning Internship"
              company="Henotic Technology Pvt Ltd"
              timeline="Jul 2022 - Sep 2022"
              description="Gained hands-on experience in the end-to-end development and deployment of machine learning models, leveraging TensorFlow and industry-standard libraries to optimize the entire ML lifecycle."
            />
          </div>
        </div>
      </section>
      
      {/* CS Concepts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">CS Concepts</h2>
          
          <div className="flex flex-wrap gap-3 max-w-3xl mx-auto">
            <span className="bg-white shadow-sm text-portfolio-blue px-4 py-2 rounded-full">
              Data Structures & Algorithms
            </span>
            <span className="bg-white shadow-sm text-portfolio-blue px-4 py-2 rounded-full">
              Machine Learning
            </span>
            <span className="bg-white shadow-sm text-portfolio-blue px-4 py-2 rounded-full">
              Cloud Computing
            </span>
            <span className="bg-white shadow-sm text-portfolio-blue px-4 py-2 rounded-full">
              Computer Networks
            </span>
          </div>
        </div>
      </section>
      
      {/* Education & Experience Summary */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Education & Experience</h2>
          
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-portfolio-blue pl-6 py-4">
              <h3 className="text-2xl font-semibold">
                B.Tech in Information Technology
              </h3>
              <p>Sagi Ramakrishnam Raju Engineering College</p>
              <p className="text-gray-500">Jun 2021 - May 2024</p>
              <p className="mt-2">GPA: 6.9</p>
            </div>
            
            <div className="border-l-4 border-portfolio-blue pl-6 py-4">
              <h3 className="text-2xl font-semibold">
                Diploma in Computer Engineering
              </h3>
              <p>Smt.B.Seetha Polytechnic</p>
              <p className="text-gray-500">Jun 2018 - Apr 2021</p>
              <p className="mt-2">Percentage: 80</p>
            </div>
            
            <div className="border-l-4 border-portfolio-blue pl-6 py-4">
              <h3 className="text-2xl font-semibold">
                Java Full-Stack Internship
              </h3>
              <p>Henotic Technology Pvt Ltd</p>
              <p className="text-gray-500">Jul 2023 - Sep 2023</p>
              <p className="mt-2">Designed a real-time web application using Java and MySQL, improving customer satisfaction and response time.</p>
            </div>
            
            <div className="border-l-4 border-portfolio-blue pl-6 py-4">
              <h3 className="text-2xl font-semibold">
                Machine Learning Internship
              </h3>
              <p>Henotic Technology Pvt Ltd</p>
              <p className="text-gray-500">Jul 2022 - Sep 2022</p>
              <p className="mt-2">Gained hands-on experience with TensorFlow industry-standard libraries for ML model development and deployment.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
