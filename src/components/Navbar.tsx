
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', sectionId: 'home' },
    { name: 'About', sectionId: 'about' },
    { name: 'Education', sectionId: 'education' },
    { name: 'Experience', sectionId: 'experience' },
    { name: 'Projects', sectionId: 'projects' },
    { name: 'Skills', sectionId: 'skills' },
    { name: 'Contact', sectionId: 'contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-end items-center">
        <Popover>
          <PopoverTrigger asChild>
            <button
              className="p-2 rounded-md"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-0">
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="w-full text-left px-4 py-2 text-portfolio-dark-gray hover:bg-gray-100 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default Navbar;
