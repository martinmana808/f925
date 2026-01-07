import React, { useState } from 'react';
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
import { ViewToggle } from './components/ui/ViewToggle';
import { WebHero } from './components/WebHero';
import { WebServices } from './components/WebServices';
import { WebProcess } from './components/WebProcess';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [view, setView] = useState<'ai' | 'web'>(() => {
    const params = new URLSearchParams(window.location.search);
    return (params.get('view') as 'ai' | 'web') || 'ai';
  });

  React.useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('view', view);
    window.history.pushState({}, '', url);
  }, [view]);

  return (
    <div className="min-h-screen bg-white transition-colors duration-500 selection:bg-brand-blue selection:text-white">
      <Navbar />
      <ViewToggle currentView={view} onViewChange={setView} />

      <main>
        <AnimatePresence mode="wait">
          {view === 'ai' ? (
            <motion.div
              key="ai-view"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Hero />
              <Optimization />
              <Products />
              <Impact />
              <CaseStudy />
              <WhyItWorks />
              <Process />
              <Team />
              <FAQ />
            </motion.div>
          ) : (
            <motion.div
              key="web-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <WebHero />
              <WebServices />
              <WebProcess />
              <CaseStudy />
              <Team />
              <FAQ />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
