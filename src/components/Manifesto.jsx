import { motion } from 'framer-motion';

export default function Manifesto() {
  const vows = [
    "I claim your silence as much as your screams.",
    "Your freedom ends where my shadow begins.",
    "You are the only chaos I allow in my order.",
    "No lock can keep me out; no road can lead you away."
  ];

  return (
    <section className="min-h-screen bg-zinc-950 py-24 px-6 flex flex-col items-center justify-center border-t border-rose-900/20">
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        className="max-w-3xl w-full space-y-12 border-l-2 border-rose-600 pl-8 md:pl-16"
      >
        <h2 className="text-rose-500 font-serif text-4xl md:text-6xl italic tracking-tighter">
          The Unspoken Pact
        </h2>
        
        <div className="space-y-8">
          {vows.map((vow, i) => (
            <motion.p 
              key={i}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="text-zinc-400 text-xl md:text-2xl font-light italic leading-relaxed"
            >
              — "{vow}"
            </motion.p>
          ))}
        </div>

        <div className="pt-10 opacity-30 text-rose-900 font-mono text-xs tracking-[0.5em] uppercase">
          Irrevocable & Bound
        </div>
      </motion.div>
    </section>
  );
}