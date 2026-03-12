import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Login from './components/Login';
import Hero3D from './components/Hero3D';
import StoryLine from './components/StoryLine';
import Compliments from './components/Compliments';
import SpecialPage from './components/SpecialPage';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showSpecialPage, setShowSpecialPage] = useState(false);

  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <Login key="login" onUnlock={() => setIsUnlocked(true)} />
        ) : !showSpecialPage ? (
          <div key="home-view" className="w-full h-full flex flex-col">
            <Hero3D />
            <StoryLine />
            {/* onNextPage function pass kra jo state chng karega */}
            <Compliments onNextPage={() => setShowSpecialPage(true)} />
          </div>
        ) : (
          <SpecialPage key="special-view" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;