import { GraduationCap, Award } from "lucide-react";
import pmistLogo from '../assets/pmist-logo.png';
import srmistLogo from '../assets/srmist-logo.png';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800">Hello there! 👨‍💻</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Hi, I'm Kishore Dharmarajan — a passionate and curious software developer with an MCA degree from SRM Institute of Science and Technology. I have hands-on experience in Python programming, AI/ML, and real-time application development, and I specialize in front-end technologies like ReactJS and AngularJS.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Through academic projects and internships, I've gained strong practical exposure to building intelligent, user-friendly software solutions. These experiences have helped me strengthen both my development skills and problem-solving mindset.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm currently seeking entry-level opportunities where I can learn, grow, and make meaningful contributions to innovative tech teams. I'm available to join immediately and excited to start my professional journey.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-800">Master's in Computer Applications</h4>
                  <p className="text-slate-600">SRM Institute of Science and Technology</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">2023 – 2025</span>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold text-blue-600">CGPA: 9.38</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-800">Bachelor's in Computer Applications</h4>
                  <p className="text-slate-600">Periyar Maniammai Institute of Science & Technology</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">2020 – 2023</span>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold text-blue-600">CGPA: 7.30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
