import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Generative AI Engineer Intern",
    company: "Sanjeevi Technology Solutions",
    duration: "Jan 2024 - Present",
    description: "Working on cutting-edge speech recognition and AI/ML projects, implementing advanced algorithms and developing innovative solutions.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "AngularJS Development Intern",
    company: "Kaashiv Infotech",
    duration: "Jun 2023 - Aug 2023",
    description: "Developed and maintained AngularJS applications, implemented responsive designs, and collaborated with cross-functional teams.",
    gradient: "from-purple-500 to-pink-500"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 bg-white shadow-xl rounded-2xl border border-slate-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-br ${exp.gradient} rounded-xl`}>
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">{exp.title}</h3>
                  <p className="text-slate-600 font-medium">{exp.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-slate-500" />
                <p className="text-slate-500 font-medium">{exp.duration}</p>
              </div>

              <p className="text-slate-700 leading-relaxed">
                {exp.description}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {exp.title.includes("AI/ML") ? (
                    <>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">AI/ML</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Speech Recognition</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Python</span>
                    </>
                  ) : (
                    <>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AngularJS</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Web Development</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">UI/UX</span>
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
