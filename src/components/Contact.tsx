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
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "Phone",
    value: "+91 97915 38432",
    icon: Phone,
    link: "tel:+919791538432",
    gradient: "from-purple-500 to-pink-400"
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/kishore-dharmarajan",
    icon: Linkedin,
    link: "https://linkedin.com/in/kishore-dharmarajan",
    gradient: "from-green-500 to-emerald-400"
  },
  {
    title: "Instagram",
    value: "@kishore.doc",
    icon: Instagram,
    link: "https://instagram.com/kishore.doc",
    gradient: "from-orange-500 to-amber-400"
  }
];

const Contact: React.FC = () => {
  return (
    <SectionContainer id="contact" title="Contact">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white dark:bg-gray-800/50 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} rounded-lg opacity-20 group-hover:opacity-25 transition-opacity duration-300`} />
              <div className="relative flex items-center gap-5">
                <div className={`p-4 rounded-lg bg-gradient-to-br ${info.gradient} shadow-md`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">{info.title}</h3>
                  <p className="text-gray-900 dark:text-gray-200 font-semibold">{info.value}</p>
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
