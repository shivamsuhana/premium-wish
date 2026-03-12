import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Login from './components/Login';
import Hero3D from './components/Hero3D';
import StoryLine from './components/StoryLine';
import Compliments from './components/Compliments';
import SpecialPage from './components/SpecialPage';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  const handleNavigatePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <Login key="login" onUnlock={handleUnlock} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {currentPage === 'home' && (
              <div className="w-full">
                <Hero3D />
                <StoryLine />
                <Compliments onNextPage={() => handleNavigatePage('special')} />
              </div>
            )}

            {currentPage === 'special' && (
              <div className="w-full">
                <button
                  onClick={() => handleNavigatePage('home')}
                  className="fixed top-8 left-8 z-40 px-4 py-2 text-sm text-rose-400 hover:text-rose-300 border border-rose-400/50 hover:border-rose-300 rounded-full transition-all duration-300 backdrop-blur-sm"
                  aria-label="Go back to home"
                >
                  ← Back
                </button>
                <SpecialPage />
              </div>
            )}

            {/* Floating Navigation */}
            {currentPage === 'home' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 backdrop-blur-md bg-black/20 px-6 py-3 rounded-full border border-white/10"
              >
                <a
                  href="#home"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-xs uppercase tracking-wider text-zinc-400 hover:text-rose-400 transition-colors"
                >
                  Top
                </a>
                <div className="w-px bg-white/10" />
                <span className="text-xs text-zinc-500">Scroll to explore</span>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;