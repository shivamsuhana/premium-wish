import { motion } from 'framer-motion';
import { ArrowRight, Crown, Zap } from 'lucide-react';

export default function Compliments({ onNextPage }) {
  const tags = ["My Ruin", "Sole Obsession", "Untamed", "Eternally Bound"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-[#050505] via-[#080808] to-[#0a0a0a] border-t border-white/5 flex flex-col items-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-rose-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/2 -right-40 w-80 h-80 bg-rose-900/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center space-y-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-rose-400"
          >
            <Crown size={20} />
            <span className="text-xs uppercase tracking-[0.3em] font-bold">Divine Words</span>
            <Crown size={20} />
          </motion.div>

          <p className="text-rose-400 text-lg md:text-xl italic tracking-widest uppercase leading-relaxed">
            "Your beauty could ruin empires..."
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            But it is your <span className="text-rose-600 italic underline decoration-rose-900">sharp tongue</span> that completely <span className="text-rose-500 font-bold">enslaves me</span>.
          </h2>
        </motion.div>

        {/* Tags Section */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tags.map((tag, i) => (
            <motion.div
              key={i}
              variants={tagVariants}
              whileHover={{ 
                scale: 1.1, 
                borderColor: 'rgba(225, 29, 72, 0.8)',
                boxShadow: '0 0 20px rgba(225, 29, 72, 0.3)'
              }}
              className="px-6 py-2.5 rounded-full border border-white/20 text-xs text-white uppercase tracking-widest shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-rose-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <span className="relative z-10 flex items-center gap-1.5">
                {i === 2 && <Zap size={12} />}
                {tag}
                {i === 2 && <Zap size={12} />}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-4 max-w-xs mx-auto pt-8 border-t border-white/10"
        >
          <div className="text-center">
            <p className="text-2xl font-bold text-rose-500">∞</p>
            <p className="text-xs text-zinc-500 uppercase tracking-wide">Obsession</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-rose-400">100%</p>
            <p className="text-xs text-zinc-500 uppercase tracking-wide">Yours</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-rose-600">⚡</p>
            <p className="text-xs text-zinc-500 uppercase tracking-wide">Mine</p>
          </div>
        </motion.div>
      </div>
      
      {/* Button Section */}
      <motion.button
        whileHover={{ scale: 1.08, boxShadow: "0px 0px 30px rgba(225, 29, 72, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onNextPage}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-16 px-10 py-4 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white rounded-full font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-3 shadow-xl shadow-rose-900/30 relative group overflow-hidden"
      >
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="relative z-10">Embrace Your Fate</span>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="relative z-10"
        >
          <ArrowRight size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}