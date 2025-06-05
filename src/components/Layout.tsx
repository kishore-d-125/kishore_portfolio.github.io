import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      {/* Navigation */}
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
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-600 hover:text-slate-900 transition-colors">
                Home
              </a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                About
              </a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">
                Projects
              </a>
              <a href="#certifications" className="text-slate-600 hover:text-slate-900 transition-colors">
                Certifications
              </a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
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
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout; 