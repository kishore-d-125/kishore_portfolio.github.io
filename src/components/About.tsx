import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: About Content */}
          <Card className="p-8 bg-white shadow-xl rounded-2xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">About</h3>
            </div>
            <div className="space-y-6 text-slate-700">
              <p className="leading-relaxed">
                I am a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. 
                My journey in software development has equipped me with expertise in modern web frameworks, cloud technologies, 
                and best practices in software engineering.
              </p>
              <p className="leading-relaxed">
                With a keen eye for detail and a commitment to writing clean, efficient code, I strive to create 
                applications that are not only functional but also provide an exceptional user experience. 
                I'm particularly interested in building scalable solutions and implementing cutting-edge technologies.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through technical writing. I believe in continuous learning and staying 
                updated with the latest industry trends.
              </p>
            </div>
          </Card>

          {/* Right: Education */}
          <Card className="p-8 bg-white shadow-xl rounded-2xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">Education</h3>
            </div>
            
            <div className="space-y-8">
              {/* MCA */}
              <div className="relative pl-8 border-l-4 border-blue-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Master of Computer Applications (MCA)</h4>
                  <p className="text-slate-600 font-medium">SRM Institute of Science and Technology</p>
                  <div className="flex items-center gap-2 mt-2">
                    <BookOpen className="w-4 h-4 text-slate-500" />
                    <p className="text-slate-500">2023 – 2025</p>
                  </div>
                  <div className="mt-2 inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    CGPA - 9.38
                  </div>
                </div>
              </div>

              {/* BCA */}
              <div className="relative pl-8 border-l-4 border-purple-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full border-4 border-white"></div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-slate-600 font-medium">Periyar Maniammai Institute of Science & Technology</p>
                  <div className="flex items-center gap-2 mt-2">
                    <BookOpen className="w-4 h-4 text-slate-500" />
                    <p className="text-slate-500">2020 – 2023</p>
                  </div>
                  <div className="mt-2 inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    CGPA - 7.30
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
