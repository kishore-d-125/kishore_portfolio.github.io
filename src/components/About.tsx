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
                Hi, I'm Kishore Dharmarajan — a passionate and driven software developer, eager to kickstart my journey in the IT industry. I specialize in crafting smart, intuitive, and responsive web applications, as well as building AI-powered solutions using technologies like Python, ReactJS, AngularJS, and Node.js.
              </p>
              <p className="leading-relaxed">
                With a strong academic foundation in computer applications and a proven track record of delivering impactful academic and internship projects, I bring a blend of technical skills, analytical thinking, and creative problem-solving to the table. My hands-on experience spans full-stack development, data handling, and real-world application design — all rooted in clean code and user-focused functionality.
              </p>
              <p className="leading-relaxed">
                I'm actively seeking entry-level opportunities where I can contribute meaningfully, collaborate with forward-thinking teams, and continue evolving as a developer in a fast-paced, tech-driven environment.
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
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Master of Computer Applications (MCA)</h4>
                  <p className="text-slate-600 font-medium">SRM Institute of Science and Technology</p>
                  <div className="flex items-center gap-2 mt-2">
                    <BookOpen className="w-4 h-4 text-slate-500" />
                    <p className="text-slate-500">2023 – 2025</p>
                  </div>
                  <div className="mt-2 inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    CGPA: 9.48
                  </div>
                </div>
              </div>

              {/* BCA */}
              <div className="relative pl-8 border-l-4 border-purple-500">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-slate-600 font-medium">Periyar Maniammai Institute of Science & Technology</p>
                  <div className="flex items-center gap-2 mt-2">
                    <BookOpen className="w-4 h-4 text-slate-500" />
                    <p className="text-slate-500">2020 – 2023</p>
                  </div>
                  <div className="mt-2 inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    CGPA: 7.30
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
