import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1955RkfwIyC_cmU9EdBvDED7hAOXg17_4/view?usp=sharing', '_blank');
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-slate-800">
            Kishore
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </nav>

          {/* Mobile Menu Button - moved to far right */}
          <div className="flex-1 flex justify-end md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Menu Content */}
          <div className="absolute right-0 top-0 h-full w-[280px] bg-white shadow-lg flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-slate-200 bg-gradient-to-r from-blue-500 to-purple-500">
              <div className="text-xl font-bold text-white">Menu</div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white hover:text-slate-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {/* Menu Items (scrollable) */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium rounded-lg"
                >
                  {item.label}
                </button>
              ))}
              {/* Download CV as last menu item */}
              <button
                onClick={handleDownloadCV}
                className="w-full flex items-center gap-2 justify-center px-4 py-3 mt-2 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
