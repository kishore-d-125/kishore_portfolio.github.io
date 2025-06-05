import React from 'react';

interface SectionContainerProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const SectionContainer = ({ id, title, children, className = '' }: SectionContainerProps) => {
  return (
    <section id={id} className={`py-20 bg-gradient-to-b from-white to-slate-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">{title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer; 