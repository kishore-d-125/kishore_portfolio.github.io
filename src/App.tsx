import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "./components/ui/tooltip";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
        <Toaster position="top-center" />
        <Navbar />
        <div className="pt-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Experience />
          <Contact />
        </div>
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App; 