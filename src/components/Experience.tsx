import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Internship on Gen-AI",
      company: "Sanjeevi Technology Solutions, Chennai",
      duration: "May – Jul 2024",
      description: "Worked on Generative AI projects, focusing on advanced AI/ML models and natural language processing for innovative solutions.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Internship on AngularJS Development",
      company: "Kaashiv Infotech, Chennai",
      duration: "May – Jun 2022",
      description: "Hands-on experience in developing real-time web applications using AngularJS, enhancing frontend development skills and project delivery.",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-lg text-slate-600 mt-4">My journey in the tech industry</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${experience.color}`}></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                  {experience.title}
                </CardTitle>
                <CardDescription className="text-lg font-medium text-slate-700">
                  {experience.company}
                </CardDescription>
                <div className="flex items-center space-x-2 text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{experience.duration}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
