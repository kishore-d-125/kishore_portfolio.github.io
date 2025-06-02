
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-purple-50/30 to-indigo-100/20"></div>
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-6 animate-fade-in">
          <div className="space-y-4">
            <p className="text-lg text-slate-600 font-medium">Hi, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Kishore Dharmarajan
              </span>
              <span className="wave inline-block ml-2">👋</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-700 font-medium">
              Software Developer | AI/ML Enthusiast | Tech Problem-Solver
            </p>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl">
            Passionate tech enthusiast with a strong foundation in Computer Applications, 
            currently pursuing MCA at SRM Institute of Science and Technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <img 
                  src="https://postimg.cc/7JM1k3py"
                  alt="Kishore Dharmarajan"
                  className="w-72 h-72 rounded-full object-cover shadow-2xl"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;
