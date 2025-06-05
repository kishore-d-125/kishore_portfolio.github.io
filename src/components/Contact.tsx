import React from 'react';
import SectionContainer from './SectionContainer';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

interface ContactInfo {
  title: string;
  value: string;
  icon: React.ElementType;
  link: string;
  gradient: string;
}

const contactInfo: ContactInfo[] = [
  {
    title: "Email",
    value: "kishored989@gmail.com",
    icon: Mail,
    link: "mailto:kishored989@gmail.com",
    gradient: "from-blue-400/40 to-cyan-300/40"
  },
  {
    title: "Phone",
    value: "+91 97915 38432",
    icon: Phone,
    link: "tel:+919791538432",
    gradient: "from-purple-400/40 to-pink-300/40"
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/kishore-dharmarajan",
    icon: Linkedin,
    link: "https://linkedin.com/in/kishore-dharmarajan",
    gradient: "from-green-400/40 to-emerald-300/40"
  },
  {
    title: "Instagram",
    value: "@kishore.doc",
    icon: Instagram,
    link: "https://instagram.com/kishore.doc",
    gradient: "from-orange-400/40 to-amber-300/40"
  }
];

const Contact: React.FC = () => {
  return (
    <SectionContainer id="contact" title="Contact">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-5 rounded-lg`} />
              <div className="relative flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${info.gradient}`}>
                  <info.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">{info.title}</h3>
                  <p className="text-gray-800">{info.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
