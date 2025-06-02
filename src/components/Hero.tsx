
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-80"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-yellow-400 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-orange-300 rounded-full opacity-70"></div>
      <div className="absolute bottom-40 right-40 w-16 h-16 bg-white rounded-full opacity-50"></div>
      
      {/* White decorative dots */}
      <div className="absolute top-32 right-10">
        <div className="flex flex-col space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-white rounded-full opacity-60"></div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-6 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hello, I'm<br />
              <span className="text-white">
                Kishore Dharmarajan An
              </span><br />
              <span className="text-white">
                Software Developer
              </span>
            </h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
            Passionate tech enthusiast with a strong foundation in Computer Applications, 
            currently pursuing MCA at SRM Institute of Science and Technology. 
            Specializing in AI/ML and modern web development.
          </p>
          
          {/* Experience badge */}
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
            <div className="text-white">
              <div className="text-2xl font-bold text-blue-300">2+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
          
          {/* Customer avatars section */}
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 w-fit">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-slate-600 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-semibold">5k</span>
              </div>
            </div>
            <span className="text-white text-sm font-medium">Real Connections</span>
          </div>
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
