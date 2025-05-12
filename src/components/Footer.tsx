
import { Mail, Linkedin, Github, Instagram, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-portfolio-dark-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Venu Gopal Chelliboyina</h2>
            <p className="text-gray-300">
              Full-Stack Developer specializing in MERN Stack and Machine Learning applications.
            </p>

            <div className="flex space-x-4 mt-4">
              <a href="https://linkedin.com/in/chelliboyina-venu-gopal-b90420233" className="text-gray-300 hover:text-white" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/venu019" className="text-gray-300 hover:text-white" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="mailto:venugopalchelliboyina@gmail.com" className="text-gray-300 hover:text-white" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="tel:+919705506233" className="text-gray-300 hover:text-white" aria-label="Phone">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white">Skills</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+91 9705506233</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>venugopalchelliboyina@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Github size={16} className="mr-2" />
                <span>github.com/venu019</span>
              </li>
              <li className="flex items-center">
                <Linkedin size={16} className="mr-2" />
                <span>linkedin.com/in/chelliboyina-venu-gopal-b90420233</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6 text-center">
          <p>&copy; 2025 Venu Gopal Chelliboyina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
