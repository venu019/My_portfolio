import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Skills', path: '#skills' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Menu Button */}
      <nav className="bg-white/20 hover:bg-white/30 backdrop-blur-lg shadow-md rounded-lg p-2 transition-all ease-in-out duration-300">
        <button
          className="p-2 rounded-md"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        className={`absolute right-0 mt-2 w-48 rounded-lg backdrop-blur-lg shadow-lg bg-white/70 p-4 flex flex-col space-y-4 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            className="text-portfolio-dark-gray hover:text-portfolio-blue transition-colors"
            onClick={closeMenu}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
