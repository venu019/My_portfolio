
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { Mail, Linkedin, Github, Instagram, Phone, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
          
          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
            {/* Social Media Links - 30% width */}
            <div className="w-full md:w-3/10">
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="flex items-center justify-center p-4 hover:bg-gray-50 transition-colors">
                      <a href="mailto:venugopalchelliboyina@gmail.com" className="flex items-center justify-center">
                        <div className="bg-portfolio-dark-blue p-4 rounded-full">
                          <Mail size={24} className="text-white" />
                        </div>
                      </a>
                    </Card>
                    
                    <Card className="flex items-center justify-center p-4 hover:bg-gray-50 transition-colors">
                      <a href="https://linkedin.com/in/chelliboyina-venu-gopal-b90420233" className="flex items-center justify-center">
                        <div className="bg-portfolio-dark-blue p-4 rounded-full">
                          <Linkedin size={24} className="text-white" />
                        </div>
                      </a>
                    </Card>
                    
                    <Card className="flex items-center justify-center p-4 hover:bg-gray-50 transition-colors">
                      <a href="https://github.com/venu019" className="flex items-center justify-center">
                        <div className="bg-portfolio-dark-blue p-4 rounded-full">
                          <Github size={24} className="text-white" />
                        </div>
                      </a>
                    </Card>
                    
                    <Card className="flex items-center justify-center p-4 hover:bg-gray-50 transition-colors">
                      <a href="https://instagram.com" className="flex items-center justify-center">
                        <div className="bg-portfolio-dark-blue p-4 rounded-full">
                          <Instagram size={24} className="text-white" />
                        </div>
                      </a>
                    </Card>
                    
                    <Card className="flex items-center justify-center p-4 hover:bg-gray-50 transition-colors">
                      <a href="tel:+919705506233" className="flex items-center justify-center">
                        <div className="bg-portfolio-dark-blue p-4 rounded-full">
                          <Phone size={24} className="text-white" />
                        </div>
                      </a>
                    </Card>
                    
                    <Card className="flex items-center justify-center p-4 hover:bg-gray-50 transition-colors">
                      <a href="https://wa.me/919705506233" className="flex items-center justify-center">
                        <div className="bg-portfolio-dark-blue p-4 rounded-full">
                          <MessageSquare size={24} className="text-white" />
                        </div>
                      </a>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form - 70% width */}
            <div className="w-full md:w-7/10">
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
                  <ContactForm />
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

export default Contact;
