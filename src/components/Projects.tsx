
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Web Search and Response Chatbot",
      description: "Smart WebBot that performs real-time searches and responds with human-like answers using GPT-2 and NLP techniques.",
      technologies: ["Python", "GPT-2", "NLP", "Web Scraping"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "College Bus Location Tracking System",
      description: "Real-time GPS web application with user alerts and driver notifications for efficient campus transportation management.",
      technologies: ["JavaScript", "GPS API", "Real-time Updates", "Web Development"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Automated Eye Disease Detection",
      description: "MATLAB-based system for diagnosing diabetic retinopathy and glaucoma using Support Vector Machine and image processing.",
      technologies: ["MATLAB", "SVM", "Image Processing", "Computer Vision"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-lg text-slate-600 mt-4">Some of my recent work and achievements</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-slate-600 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
