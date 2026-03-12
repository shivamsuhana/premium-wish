import { motion } from 'framer-motion';
import { Crown, Sparkles } from 'lucide-react';

export default function GrandWish() {
  return (
    <section className="min-h-[65vh] py-20 flex items-center justify-center bg-gradient-to-b from-[#000000] via-[#050505] to-[#030303] relative overflow-hidden">
      {/* Animated background elmnts */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-rose-950/30 blur-[180px] rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-rose-900/20 blur-[120px] rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center px-4 space-y-12"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-3"
        >
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}>
            <Crown size={28} className="text-rose-500" />
          </motion.div>
          <h3 className="text-rose-600 tracking-[1.5em] uppercase text-[12px] md:text-sm font-bold">The Final Sovereign Claim</h3>
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}>
            <Crown size={28} className="text-rose-500" />
          </motion.div>
        </motion.div>

        <h1 className="text-6xl md:text-[10rem] font-serif text-white leading-none tracking-tighter">
          SOLELY & <br/> 
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="text-rose-700 drop-shadow-[0_0_50px_rgba(225,29,72,0.8)] italic font-bold text-7xl md:text-9xl"
          >
            BOUND
          </motion.span>
        </h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.8, duration: 0.8 }}
          className="space-y-6 py-8"
        >
          <p className="text-zinc-400 max-w-2xl mx-auto italic font-light text-xl md:text-2xl leading-relaxed hover:text-zinc-300 transition-colors">
            "Your defiance was a challenge I accepted the moment I saw you. Now, there is no escape. No world exists for you outside of my shadow."
          </p>
          
          <div className="pt-12 flex justify-center">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }} 
              className="text-7xl md:text-9xl text-white/90 drop-shadow-lg"
            >
              krishu
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-24 h-40 w-[1px] bg-gradient-to-b from-rose-700 via-rose-900 to-transparent mx-auto opacity-60 origin-top"
        />

        <motion.div 
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }}
            >
              <Sparkles size={20} className="text-rose-500" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}