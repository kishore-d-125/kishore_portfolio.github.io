import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/1955RkfwIyC_cmU9EdBvDED7hAOXg17_4/view", "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-slate-800">
              KD
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a href="#home" className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">
              Home
            </a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">
              About
            </a>
            <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">
              Skills
            </a>
            <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">
              Projects
            </a>
            <a href="#certifications" className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">
              Certifications
            </a>
            <a href="#experience" className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">
              Experience
            </a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">
              Contact
            </a>
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 px-3 lg:px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm lg:text-base"
            >
              <Download className="h-4 w-4" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#certifications"
              className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md"
              onClick={toggleMenu}
            >
              Certifications
            </a>
            <a
              href="#experience"
              className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <button
              onClick={() => {
                handleDownload();
                toggleMenu();
              }}
              className="w-full flex items-center justify-center space-x-2 px-3 py-2 mt-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              <Download className="h-4 w-4" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 