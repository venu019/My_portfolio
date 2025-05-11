
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { Mail, Linkedin, Github, Instagram, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-portfolio-dark-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-xl max-w-3xl">
            Get in touch for collaborations, opportunities, or just to say hello.
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading title="Get In Touch" />
          
          <p className="text-center max-w-2xl mx-auto mb-12 text-lg text-portfolio-text-gray">
            I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out to me!
          </p>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
              
              <div className="flex justify-between mb-12">
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
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
