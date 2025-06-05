import SectionContainer from './SectionContainer';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Intern – Speech Recognition & AI/ML',
    company: 'Sanjeevi Technology Solutions, Chennai',
    duration: 'May 2024 – July 2024',
    description: [
      'Built and tested automatic speech recognition models using Python and Whisper AI',
      'Focused on transcribing YouTube audio into text with high accuracy',
      'Implemented advanced machine learning techniques for improved transcription quality',
      'Worked on optimizing model performance and accuracy metrics',
    ],
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Intern – AngularJS Development',
    company: 'Kaashiv Infotech, Chennai',
    duration: 'May 2022 – July 2022',
    description: [
      'Worked on real-time web application development using AngularJS',
      'Gained hands-on experience in component-based architecture',
      'Implemented front-end development best practices',
      'Collaborated with team members on feature development',
    ],
    gradient: 'from-purple-500 to-pink-400',
  },
];

const Experience = () => {
  return (
    <SectionContainer id="experience" title="Experience">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-5 h-5 rounded-full bg-gradient-to-br ${exp.gradient} transform -translate-x-1/2 shadow-lg`} />
                
                {/* Content */}
                <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-10`} />
                  
                  {/* Content Container */}
                  <div className="relative p-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${exp.gradient} bg-opacity-10`}>
                        <Briefcase className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black mb-1">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-black/70">
                          <span className="font-medium">{exp.company}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.gradient} mt-2`} />
                          <p className="text-black/80 leading-relaxed">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Experience;
