import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const text = "Recently graduated student";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayed(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-12">
        {/* Left: Text */}
        <div className="flex-1 w-full md:w-1/2 text-center md:text-left md:pr-12 flex flex-col items-center md:items-start justify-center order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in">
            Hello, I'm Kishore
          </h1>
          <p className="text-xl text-white/90 mb-4 font-semibold min-h-[2.5rem] animate-slide-up">
            <span>{displayed}</span>
            <span className="inline-block w-2 h-6 bg-white ml-1 animate-pulse align-middle rounded-sm" />
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-xl animate-slide-up animation-delay-200 mb-4">
            A passionate fresher with a strong foundation in software development, AI/ML, and modern web technologies.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-xl animate-slide-up animation-delay-200">
            I'm actively seeking entry-level opportunities where I can learn, contribute, and grow.
          </p>
        </div>
        {/* Right: Profile Image */}
        <div className="flex-1 w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0 order-2 animate-fade-in animation-delay-400">
          <div className="relative mx-auto md:mx-0 group w-[18rem] h-[18rem] sm:w-[20rem] sm:h-[20rem] md:w-[24rem] md:h-[24rem]">
            <span className="absolute inset-0 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 animate-spin-slow group-hover:animate-spin"></span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400/20 via-pink-500/20 to-purple-500/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <img
              src="https://i.postimg.cc/7ZhGWGs2/kd.jpg"
              alt="Kishore"
              className="relative w-full h-full rounded-full object-cover bg-white shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-105"
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
      </div>
      {/* Arrow Down Icon */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="w-10 h-10 text-white/80 hover:text-white transition-colors duration-300" />
      </div>
    </section>
  );
};

export default Hero;
