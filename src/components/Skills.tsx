import SectionContainer from './SectionContainer';
import { Code2, Cpu, GitBranch, TestTube2, Wrench, Database } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
    icon: Code2,
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "Frameworks & Libraries",
    skills: ["AngularJS", "ReactJS", "Bootstrap"],
    icon: Database,
    gradient: "from-purple-500 to-pink-400"
  },
  {
    title: "AI & ML Techniques",
    skills: ["Natural Language Processing (NLP)", "Support Vector Machines (SVM)"],
    icon: Cpu,
    gradient: "from-green-500 to-emerald-400"
  },
  {
    title: "Development Practices",
    skills: ["Agile Methodology", "Scrum Process", "SDLC", "System Design"],
    icon: GitBranch,
    gradient: "from-orange-500 to-amber-400"
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "MATLAB", "Google Maps API", "EmailJS"],
    icon: Wrench,
    gradient: "from-red-500 to-rose-400"
  },
  {
    title: "Testing",
    skills: ["Selenium (Beginner)", "Jira for Manual Testing"],
    icon: TestTube2,
    gradient: "from-indigo-500 to-violet-400"
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
              className="group relative bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-10 group-hover:opacity-15 transition-opacity duration-300`} />
              
              {/* Content Container */}
              <div className="relative p-8">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-lg`}>
                    <category.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 group-hover:bg-white dark:group-hover:bg-gray-700 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Skills;
