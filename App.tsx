import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Optimization } from './components/Optimization';
import { Impact } from './components/Impact';
import { CaseStudy } from './components/CaseStudy';
import { WhyItWorks } from './components/WhyItWorks';
import { Team } from './components/Team';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Optimization />
        <Products />
        <Impact />
        <CaseStudy />
        <WhyItWorks />
        <Process />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;