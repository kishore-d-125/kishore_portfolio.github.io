
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-6 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hello, I'm<br />
              <span className="text-white">
                Kishore Dharmarajan
              </span>
            </h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
            Passionate fresher with a strong foundation in AI/ML and modern web development. 
            Skilled in Python, ReactJS, AngularJS, and NLP. I enjoy building intelligent, 
            user-friendly applications that solve real-world problems.
          </p>
        </div>
        
        <div className="flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img 
                  src="https://i.postimg.cc/Vv2KX4g5/Kishore-Image.jpg"
                  alt="Kishore Dharmarajan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
