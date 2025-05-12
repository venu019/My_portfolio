
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
          
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-portfolio-blue pl-6 py-4">
                  <h3 className="text-xl font-semibold">
                    B.Tech in Information Technology
                  </h3>
                  <p>Sagi Ramakrishnam Raju Engineering College Bhimavaram, AP</p>
                  <p className="text-gray-500">Jun 2021 - May 2024</p>
                  <p className="mt-2">GPA: 6.9</p>
                </div>
                
                <div className="border-l-4 border-portfolio-blue pl-6 py-4">
                  <h3 className="text-xl font-semibold">
                    Diploma in Computer Engineering
                  </h3>
                  <p>Smt.B.Seetha Polytechnic Bhimavaram, AP</p>
                  <p className="text-gray-500">Jun 2018 - Apr 2021</p>
                  <p className="mt-2">Percentage: 80</p>
                </div>
                
                <div className="border-l-4 border-portfolio-blue pl-6 py-4">
                  <h3 className="text-xl font-semibold">
                    SSC
                  </h3>
                  <p>Gitanjali Grammar School Dhone, AP</p>
                  <p className="text-gray-500">Apr 2018</p>
                  <p className="mt-2">GPA: 9.8</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Work Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="My Experience" title="Work Experience" />
          
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-portfolio-blue pl-6 py-4">
                  <h3 className="text-xl font-semibold">
                    Java Full-Stack Internship
                  </h3>
                  <p>Henotic Technology Pvt Ltd</p>
                  <p className="text-gray-500">Jul 2023 - Sep 2023</p>
                  <p className="mt-2">Designed a real-time web application, enhancing customer satisfaction by 30% and optimizing server-side logic and database interactions using Java and MySQL, reducing response time by 20%.</p>
                </div>
                
                <div className="border-l-4 border-portfolio-blue pl-6 py-4">
                  <h3 className="text-xl font-semibold">
                    Machine Learning Internship
                  </h3>
                  <p>Henotic Technology Pvt Ltd</p>
                  <p className="text-gray-500">Jul 2022 - Sep 2022</p>
                  <p className="mt-2">Gained hands-on experience in the end-to-end development and deployment of machine learning models, leveraging TensorFlow and industry-standard libraries to optimize the entire ML lifecycle.</p>
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

export default About;
