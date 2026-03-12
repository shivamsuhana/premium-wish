import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpecialPage() {
  const [showPopup, setShowPopup] = useState(false);

  const cards = [
    { text: "I've memorized the exact way you smile right before you say something that completely destroys my sanity. Do it again." },
    { text: "Tell me to kneel, and I will. But don't ever mistake my devotion for weakness. I bow only to you, and I destroy anyone who forgets it." },
    { text: "You think you're dangerous? Darling, you haven't seen the terrifying things I would do to anyone who makes you cry." },
    { text: "I don't just want your good days. I want to trace your scars, kiss your flaws, and own every single dark thought in that beautiful mind of yours." },
    { text: "Your voice is my absolute favorite sin. Whisper my name, and watch me drop the rest of the world just to be at your feet." },
    { text: "Run if you want, but we both know all your roads lead back to me. You're the madness I crave, and I'm the monster you secretly love." }
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950/30 via-[#030303] to-[#000000] py-24 px-4 relative overflow-hidden flex flex-col items-center">
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-serif text-purple-500/80 mb-20 italic text-center drop-shadow-[0_0_20px_rgba(147,51,234,0.3)]"
      >
        Dark Whispers
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full mb-24 z-10">
        {cards.map((card, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.15 }}
            whileHover={{ y: -10, borderColor: '#9333ea', backgroundColor: 'rgba(147,51,234,0.05)' }}
            className="p-8 rounded-3xl bg-zinc-950/80 border border-white/5 backdrop-blur-md shadow-2xl flex items-center justify-center text-center transition-all duration-300"
          >
            <p className="text-zinc-300 text-lg font-light italic leading-relaxed">"{card.text}"</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 40px rgba(147, 51, 234, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowPopup(true)}
        className="z-10 px-12 py-6 rounded-full bg-purple-700 hover:bg-purple-600 text-white font-serif text-xl tracking-[0.3em] uppercase shadow-2xl transition-all"
      >
        Unlock Your Reign
      </motion.button>

      {/* Grand Long Wish Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl px-4 py-10 overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-[#050505] p-10 md:p-16 rounded-[2rem] border border-purple-600/30 max-w-3xl w-full relative shadow-[0_0_150px_rgba(147,51,234,0.15)] my-auto"
            >
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-6 right-8 text-zinc-600 hover:text-purple-500 text-3xl transition-colors"
              >
                ✕
              </button>
              
              <div className="text-center mb-10">
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">
                  OWNED & <br/> 
                  <span className="text-purple-500 drop-shadow-[0_0_15px_rgba(147,51,234,0.6)] mt-2 block text-5xl md:text-8xl">ADORED</span>
                </h1>
                <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
              </div>
              
              <div className="space-y-6 text-lg md:text-xl text-zinc-300 font-light italic leading-loose text-justify">
                <p>
                  You are the poison I would happily drink every single day. The world can have its ordinary, safe love stories; I want the messy, intense, borderline obsessive magic that we have.
                </p>
                <p>
                  You aren't just an attraction; you are my entire religion. You own my thoughts, my late nights, and every heartbeat I have left. When you command, I listen. When you smile, I surrender entirely.
                </p>
                <p>
                  So keep driving me absolutely crazy, because I am never, ever letting you go. You are mine, in this lifetime and the next.
                </p>
              </div>
              
              <div className="text-right mt-16">
                <p className="text-purple-500/60 text-xs tracking-[0.4em] uppercase mb-2">Yours to command,</p>
                <p className="text-5xl font-serif text-white italic drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">neyno</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}