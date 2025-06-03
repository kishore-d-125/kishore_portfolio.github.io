const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "HTML5", "CSS3", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["AngularJS", "ReactJS"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI/ML",
      skills: ["Natural Language Processing (NLP)", "Whisper AI (ASR)", "Support Vector Machines (SVM)", "Image Processing (GLCM, Morphology)"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Development & Engineering",
      skills: ["Software Development Life Cycle (SDLC)", "Agile Methodology & Scrum Process", "System Design"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Testing",
      skills: ["Manual Testing", "Jira"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git & GitHub", "MATLAB"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-lg text-slate-600 mt-4">Technologies and methodologies I work with</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-full text-sm font-medium hover:scale-110 transition-transform duration-200 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
