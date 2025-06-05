import SectionContainer from './SectionContainer';
import { Code2, Cpu, GitBranch, TestTube2, Wrench, Database } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
    icon: Code2,
    gradient: "from-blue-400/40 to-cyan-300/40"
  },
  {
    title: "Frameworks & Libraries",
    skills: ["AngularJS", "ReactJS", "Bootstrap"],
    icon: Database,
    gradient: "from-purple-400/40 to-pink-300/40"
  },
  {
    title: "AI & ML Techniques",
    skills: ["Natural Language Processing (NLP)", "Whisper AI", "Support Vector Machines (SVM)"],
    icon: Cpu,
    gradient: "from-green-400/40 to-emerald-300/40"
  },
  {
    title: "Development Practices",
    skills: ["Agile Methodology", "Scrum Process", "SDLC", "System Design"],
    icon: GitBranch,
    gradient: "from-orange-400/40 to-amber-300/40"
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "MATLAB", "Google Maps API", "EmailJS"],
    icon: Wrench,
    gradient: "from-red-400/40 to-rose-300/40"
  },
  {
    title: "Testing",
    skills: ["Manual Testing (Beginner Level)"],
    icon: TestTube2,
    gradient: "from-indigo-400/40 to-violet-300/40"
  }
];

const Skills = () => {
  return (
    <SectionContainer id="skills" title="Skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5`} />
              
              {/* Content Container */}
              <div className="relative p-8">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-white/90`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${category.gradient} bg-opacity-5 text-gray-700 hover:bg-opacity-10 transition-all duration-300`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Skills;
