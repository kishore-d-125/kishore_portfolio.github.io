import SectionContainer from './SectionContainer';

const projects = [
  {
    title: "Web Search and Response Chatbot using GPT-2 and NLP",
    description: "A chatbot capable of performing web searches and generating human-like responses using natural language processing.",
    technologies: ["Python", "GPT-2", "NLP"],
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "College Bus Location Tracking System",
    description: "A real-time GPS-based web application to track college bus locations, providing alerts and route information.",
    technologies: ["HTML", "CSS", "JavaScript", "Google Maps API"],
    gradient: "from-purple-500 to-pink-400"
  },
  {
    title: "Automated Eye Disease Detection using SVM",
    description: "A medical diagnostic system that detects diabetic retinopathy and glaucoma using retinal images and machine learning.",
    technologies: ["MATLAB", "Image Processing", "SVM"],
    gradient: "from-green-500 to-emerald-400"
  },
  {
    title: "Speech Transcription Using Whisper for YouTube",
    description: "A speech recognition tool that transcribes spoken content from YouTube videos using OpenAI's Whisper model.",
    technologies: ["Python", "Whisper AI"],
    gradient: "from-orange-500 to-amber-400"
  }
];

const Projects = () => {
  return (
    <SectionContainer id="projects" title="Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
              
              {/* Content Container */}
              <div className="relative p-8">
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-black">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-black mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} bg-opacity-10 text-white`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Projects;
