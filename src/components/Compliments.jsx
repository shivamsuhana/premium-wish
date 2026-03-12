import { motion } from 'framer-motion';

export default function Compliments({ onNextPage }) {
  return (
    <section className="py-32 bg-[#080808] border-t border-white/5 flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="space-y-6">
          <p className="text-rose-400 text-lg italic">"Teri voice kaafi achi hai, face toh mast hai hi..."</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            Aur tere muh se <span className="text-rose-600 italic underline decoration-rose-900">gaaliyan</span> bhi sahi lagti hain!
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 opacity-50 mb-20">
          {["Baddie", "Indore Queen", "Mommy", "Puppet's Favorite"].map((tag, i) => (
            <span key={i} className="px-6 py-2 rounded-full border border-white/20 text-xs text-white uppercase tracking-widest">{tag}</span>
          ))}
        </div>
      </div>
      
      {/* button wla part*/}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNextPage}
        className="mt-10 px-8 py-4 bg-transparent border-2 border-rose-600 text-rose-500 hover:bg-rose-600 hover:text-white rounded-full font-bold uppercase tracking-widest transition-all"
      >
        Unlock the Deepest Secrets
      </motion.button>
    </section>
  );
}