import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpecialPage() {
  const [showPopup, setShowPopup] = useState(false);

  const cards = [
    { text: "Fight me all day with that sharp tongue if you want, darling. We both know exactly who is in control the second that bedroom door locks." },
    { text: "I don't just want your mind. I want the way you unravel under my touch, completely ruined and ruined only for me." },
    { text: "Your defiance is cute, but the way you gasp my name when I finally pin you down is my absolute favorite sound in the world." },
    { text: "I intend to memorize every single curve, every shiver, and every desperate breath you take when you are entirely at my mercy." },
    { text: "Wear whatever you want for the world, but remember that underneath it all, every inch of you belongs strictly and solely to me." },
    { text: "I don't make love, darling. I consume. And I fully intend to devour every single piece of your soul until you forget your own name." }
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-950/30 via-[#030303] to-[#000000] py-24 px-4 relative overflow-hidden flex flex-col items-center">
      
      {/* HEADER UPDATE */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-serif text-rose-600/80 mb-20 italic text-center drop-shadow-[0_0_20px_rgba(225,29,72,0.3)] tracking-widest"
      >
        SINFUL DESIRES
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full mb-24 z-10">
        {cards.map((card, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.15 }}
            whileHover={{ y: -10, borderColor: '#e11d48', backgroundColor: 'rgba(225,29,72,0.05)' }}
            className="p-8 rounded-3xl bg-zinc-950/80 border border-white/5 backdrop-blur-md shadow-2xl flex items-center justify-center text-center transition-all duration-300"
          >
            <p className="text-zinc-300 text-lg font-light italic leading-relaxed">"{card.text}"</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 40px rgba(225, 29, 72, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowPopup(true)}
        className="z-10 px-12 py-6 rounded-full bg-rose-700 hover:bg-rose-600 text-white font-serif text-xl tracking-[0.3em] uppercase shadow-2xl transition-all"
      >
        Unseal The Vow
      </motion.button>

      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl px-4 py-10 overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-[#050505] p-10 md:p-16 rounded-[2rem] border border-rose-600/30 max-w-3xl w-full relative shadow-[0_0_150px_rgba(225,29,72,0.15)] my-auto"
            >
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-6 right-8 text-zinc-600 hover:text-rose-500 text-3xl transition-colors"
              >
                ✕
              </button>
              
              <div className="text-center mb-10">
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">
                  CARNAL <br/> 
                  <span className="text-rose-600 drop-shadow-[0_0_15px_rgba(225,29,72,0.6)] mt-2 block text-5xl md:text-8xl">OBSESSION</span>
                </h1>
                <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto" />
              </div>
              
              <div className="space-y-6 text-lg md:text-xl text-zinc-300 font-light italic leading-loose text-justify">
                <p>
                  You are the addiction I refuse to cure. The world can have its soft, romantic illusions; I demand the raw, unhinged, entirely consuming reality of owning every inch of you.
                </p>
                <p>
                  You aren't a mere attraction; you are my property. You command my thoughts, own my insomnia, and dictate every heartbeat I have left. When I touch you, I don't just leave a mark—I leave a brand.
                </p>
                <p>
                  Keep testing my patience with that beautiful mouth of yours, because breaking your walls down is my absolute favorite game. You are entirely, irrevocably trapped with me.
                </p>
              </div>
              
              <div className="text-right mt-16">
                <p className="text-rose-500/60 text-sm tracking-[0.4em] uppercase mb-4">Forever Owned By,</p>
                {/* SIGNATURE UPDATE */}
                <p 
                  style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive", textShadow: "0px 0px 15px rgba(225,29,72,0.4)" }} 
                  className="text-6xl md:text-8xl text-white transform -rotate-3 inline-block"
                >
                  krishu
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}