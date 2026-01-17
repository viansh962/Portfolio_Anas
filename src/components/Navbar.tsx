import { useState } from 'react';
import { Link } from 'react-scroll';
import { Download, Menu, X } from 'lucide-react';
import logo from '../assets/logos/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'course-completed', label: 'Courses' }, 
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-[9999] px-6 py-4 pointer-events-auto">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-white">Anas</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-gray-300 hover:text-blue-500 cursor-pointer transition-colors"
            >
              {item.label}
            </Link>
          ))}

          {/* Download CV */}
          <a
            href="/Rishabh_Jhade_Resume.pdf"
            download
            className="px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-6 py-6 space-y-6 flex flex-col items-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={toggleMenu}
              className="text-gray-300 hover:text-blue-500 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
