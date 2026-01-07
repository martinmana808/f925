import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`py-32 md:py-64 px-6 md:px-12 ${className}`}>
      <div className="max-w-screen-2xl mx-auto">
        {children}
      </div>
    </section>
  );
};
