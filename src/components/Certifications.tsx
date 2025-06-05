import SectionContainer from './SectionContainer';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: "Data Analytics with Python",
    issuer: "N.S.D.C at Prag Robotics Private Limited",
    duration: "Jan 2022 – Apr 2024",
    credentialId: "PRC17141",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "AngularJS Real-Time App Development",
    issuer: "Kaashiv Infotech, Chennai",
    duration: "May 2022 – Jul 2022",
    credentialId: "KA-q9owa",
    gradient: "from-purple-500 to-pink-400"
  },
  {
    title: "Deloitte Australia – Technology Job Simulation",
    issuer: "Forage",
    duration: "May 2025",
    credentialId: "qPAQn5mFvWCDgzJTJ",
    gradient: "from-green-500 to-emerald-400"
  },
  {
    title: "Software Testing Foundations: Test Techniques",
    issuer: "LinkedIn Learning",
    duration: "May 2025",
    credentialId: "N/A",
    gradient: "from-orange-500 to-amber-400"
  }
];

const Certifications = () => {
  return (
    <SectionContainer id="certifications" title="Certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-10`} />
              
              {/* Content Container */}
              <div className="relative p-8">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${cert.gradient} bg-opacity-10`}>
                    <Award className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {cert.title}
                  </h3>
                </div>
                
                {/* Issuer and Duration */}
                <div className="mb-4">
                  <p className="text-black font-medium mb-1">Issued by: {cert.issuer}</p>
                  <p className="text-black/70">Duration: {cert.duration}</p>
                </div>

                {/* Credential ID */}
                <div className="text-black/70 text-sm">
                  Credential ID: {cert.credentialId}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Certifications; 