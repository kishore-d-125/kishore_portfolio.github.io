import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 animate-gradient"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-400/20 rounded-full -top-20 -left-20 animate-float"></div>
        <div className="absolute w-96 h-96 bg-purple-400/20 rounded-full top-1/2 -right-40 animate-float-delayed"></div>
        <div className="absolute w-64 h-64 bg-indigo-400/20 rounded-full -bottom-32 left-1/4 animate-float-slow"></div>
        <div className="absolute w-80 h-80 bg-pink-400/20 rounded-full top-1/3 left-1/3 animate-float-very-slow"></div>
      </div>
      
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
            <div className="w-[450px] h-[450px] rounded-full bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500 p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img 
                  className="w-full h-full object-cover"
                  src="https://i.postimg.cc/Vv2KX4g5/Kishore-Image.jpg"
                  alt="Kishore Dharmarajan"
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
