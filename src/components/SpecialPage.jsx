import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Flame } from 'lucide-react';

export default function SpecialPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [likedCards, setLikedCards] = useState(new Set());

  const cards = [
    { text: "Fight me all day with that sharp tongue if you want, darling. We both know exactly who is in control the second that bedroom door locks.", icon: "🌹" },
    { text: "I don't just want your mind. I want the way you unravel under my touch, completely ruined and ruined only for me.", icon: "🔥" },
    { text: "Your defiance is cute, but the way you gasp my name when I finally pin you down is my absolute favorite sound in the world.", icon: "💋" },
    { text: "I intend to memorize every single curve, every shiver, and every desperate breath you take when you are entirely at my mercy.", icon: "✨" },
    { text: "Wear whatever you want for the world, but remember that underneath it all, every inch of you belongs strictly and solely to me.", icon: "👑" },
    { text: "I don't make love, darling. I consume. And I fully intend to devour every single piece of your soul until you forget your own name.", icon: "⚡" }
  ];

  const toggleLike = (index) => {
    const newLiked = new Set(likedCards);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedCards(newLiked);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-950/20 via-[#030303] to-[#000000] py-24 px-4 relative overflow-hidden flex flex-col items-center">
      
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-rose-900/20 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-rose-600/10 blur-[150px] rounded-full -z-10" />

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-4"
      >
        <div className="flex items-center justify-center gap-2 mb-4 text-rose-500">
          <Flame size={24} className="animate-pulse" />
          <h2 className="text-5xl md:text-7xl font-serif text-rose-600/90 italic drop-shadow-[0_0_20px_rgba(225,29,72,0.3)] tracking-widest">
            SINFUL DESIRES
          </h2>
          <Flame size={24} className="animate-pulse" />
        </div>
        <p className="text-zinc-500 text-sm md:text-base tracking-[0.2em] uppercase">Unfiltered thoughts</p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full mb-24 z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {cards.map((card, i) => (
          <motion.div 
            key={i}
            variants={cardVariants}
            whileHover={{ y: -12, borderColor: '#e11d48', boxShadow: '0 0 30px rgba(225,29,72,0.3)' }}
            className="p-8 rounded-3xl bg-zinc-950/60 border border-white/5 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-between text-center transition-all duration-300 group relative overflow-hidden cursor-pointer"
            onClick={() => toggleLike(i)}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

            <div className="relative z-10 flex flex-col h-full justify-between gap-4">
              <div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-5xl mb-3"
                >
                  {card.icon}
                </motion.p>
                <p className="text-zinc-300 text-lg font-light italic leading-relaxed">
                  "{card.text}"
                </p>
              </div>

              {/* Like Button */}
              <motion.button
                whileHover={{ scale: 1.25, rotate: [0, -15, 15, -15, 0] }}
                whileTap={{ scale: 0.8 }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(i);
                }}
                className={`mt-4 transition-all duration-300 ${
                  likedCards.has(i) 
                    ? 'text-rose-600 drop-shadow-[0_0_12px_rgba(225,29,72,0.6)]' 
                    : 'text-rose-400 hover:text-rose-500'
                }`}
              >
                <Heart 
                  size={24} 
                  fill={likedCards.has(i) ? 'currentColor' : 'none'}
                  strokeWidth={2}
                />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Button */}
      <motion.button
        whileHover={{ scale: 1.08, boxShadow: "0px 0px 50px rgba(225, 29, 72, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowPopup(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="z-10 px-14 py-7 rounded-full bg-gradient-to-r from-rose-700 to-rose-600 hover:from-rose-600 hover:to-rose-500 text-white font-serif text-xl tracking-[0.3em] uppercase shadow-2xl shadow-rose-900/50 transition-all font-bold group relative overflow-hidden"
      >
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="relative z-10">Unseal The Vow</span>
      </motion.button>

      {/* Modal Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }} 
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }} 
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-10 overflow-y-auto"
            onClick={() => setShowPopup(false)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50, opacity: 0 }} 
              animate={{ scale: 1, y: 0, opacity: 1 }} 
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-gradient-to-b from-[#0a0a0a] to-[#050505] p-10 md:p-16 rounded-3xl border border-rose-600/30 max-w-3xl w-full relative shadow-[0_0_150px_rgba(225,29,72,0.25)] my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button 
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowPopup(false)}
                className="absolute top-6 right-8 text-zinc-600 hover:text-rose-500 transition-colors"
                aria-label="Close modal"
              >
                <X size={32} />
              </motion.button>
              
              {/* Modal Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-12"
              >
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 leading-tight">
                  CARNAL <br/> 
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-rose-600 drop-shadow-[0_0_12px_rgba(225,29,72,0.4)] mt-3 block text-6xl md:text-8xl font-bold"
                  >
                    OBSESSION
                  </motion.span>
                </h1>
                <motion.div 
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto mt-6 origin-center"
                />
              </motion.div>
              
              {/* Body Text */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-6 text-lg md:text-xl text-zinc-300 font-light italic leading-relaxed text-justify mb-12"
              >
                <p className="hover:text-rose-300 transition-colors">
                  You are the addiction I refuse to cure. The world can have its soft, romantic illusions; I demand the raw, unhinged, entirely consuming reality of owning every inch of you.
                </p>
                <p className="hover:text-rose-300 transition-colors">
                  You aren't a mere attraction; you are my property. You command my thoughts, own my insomnia, and dictate every heartbeat I have left. When I touch you, I don't just leave a mark—I leave a brand.
                </p>
                <p className="hover:text-rose-300 transition-colors">
                  Keep testing my patience with that beautiful mouth of yours, because breaking your walls down is my absolute favorite game. You are entirely, irrevocably trapped with me.
                </p>
              </motion.div>
              
              {/* Signature */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-right border-t border-rose-600/20 pt-10"
              >
                <p className="text-rose-500/60 text-sm tracking-[0.4em] uppercase mb-6">Forever Claimed By,</p>
                <motion.p 
                  animate={{ rotate: [-1, 0, -1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive", textShadow: "0px 0px 15px rgba(225,29,72,0.6)" }} 
                  className="text-7xl md:text-9xl text-white inline-block"
                >
                  krishu
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}