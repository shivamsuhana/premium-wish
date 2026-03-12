import { motion } from 'framer-motion';
import { BookOpen, Lock, Zap } from 'lucide-react';

export default function Manifesto() {
  const vows = [
    { text: "I claim your silence as much as your screams.", icon: "🔇" },
    { text: "Your freedom ends where my shadow begins.", icon: "🌑" },
    { text: "You are the only chaos I allow in my order.", icon: "🌪️" },
    { text: "No lock can keep me out; no road can lead you away.", icon: "🔓" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#050505] via-zinc-950 to-[#030303] py-24 px-6 flex flex-col items-center justify-center border-t border-rose-900/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-rose-900/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-600/5 blur-[120px] rounded-full -z-10" />

      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center gap-2 mb-4 text-rose-600">
            <Lock size={24} />
            <BookOpen size={24} />
            <Lock size={24} />
          </div>
          <h2 className="text-rose-500 font-serif text-4xl md:text-6xl italic tracking-tighter mb-2">
            The Unspoken Pact
          </h2>
          <p className="text-zinc-500 text-sm uppercase tracking-[0.3em]">Eternal & Irrevocable</p>
        </motion.div>

        {/* Vows */}
        <motion.div 
          className="space-y-8 md:space-y-12 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        >
          {/* Left Border Accent */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-600 via-rose-600/50 to-transparent origin-top"
          />

          {vows.map((vow, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="pl-8 md:pl-16 relative group"
            >
              {/* Animated dot */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ delay: 0.3 + i * 0.1, duration: 2, repeat: Infinity }}
                className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-rose-600 shadow-lg shadow-rose-600/50"
              />

              <div className="flex items-start gap-3 md:gap-4">
                <motion.span 
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 20, scale: 1.2 }}
                  className="text-3xl md:text-4xl flex-shrink-0 cursor-pointer"
                >
                  {vow.icon}
                </motion.span>
                <motion.p 
                  className="text-zinc-400 text-lg md:text-2xl font-light italic leading-relaxed group-hover:text-rose-300/70 transition-colors duration-300 cursor-pointer"
                >
                  — "{vow.text}"
                </motion.p>
              </div>

              {/* Hover underline */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="h-px bg-gradient-to-r from-rose-600/50 to-transparent mt-3 origin-left group-hover:from-rose-500"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 md:mt-32 pt-12 md:pt-16 border-t border-rose-900/20 text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-rose-600/80">
            <Zap size={18} className="animate-pulse" />
            <p className="text-rose-600/60 font-mono text-xs md:text-sm tracking-[0.5em] uppercase">
              Sealed In Eternity
            </p>
            <Zap size={18} className="animate-pulse" />
          </div>
          <p className="text-zinc-600 text-xs italic">These vows cannot be broken, only deepened</p>
        </motion.div>
      </motion.div>
    </section>
  );
}