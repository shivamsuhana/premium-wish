import { motion } from 'framer-motion';

export default function Compliments({ onNextPage }) {
  return (
    <section className="py-32 bg-[#080808] border-t border-white/5 flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="space-y-6">
          <p className="text-rose-400 text-lg md:text-xl italic tracking-widest uppercase">
            "Your beauty could ruin empires..."
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            But it is your <span className="text-rose-600 italic underline decoration-rose-900">sharp tongue</span> that completely enslaves me.
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 opacity-50 mb-20">
          {/* Purane submissive tags ko Alpha/Dark tags se replace kar diya */}
          {["My Ruin", "Sole Obsession", "Untamed", "Eternally Bound"].map((tag, i) => (
            <span key={i} className="px-6 py-2 rounded-full border border-white/20 text-xs text-white uppercase tracking-widest shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* button wla part*/}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(225, 29, 72, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onNextPage}
        className="mt-10 px-8 py-4 bg-transparent border-2 border-rose-600 text-rose-500 hover:bg-rose-600 hover:text-white rounded-full font-bold uppercase tracking-widest transition-all duration-300"
      >
        Embrace Your Fate
      </motion.button>
    </section>
  );
}