import { motion } from 'framer-motion';

export default function StoryLine() {
  const cards = [
    { 
      title: "The Silent Shift", 
      desc: "There was a constant, deafening noise in everything, until I found you. Your presence brought a stillness that silenced the chaos. I didn't even realize when you became my anchor." 
    },
    { 
      title: "The Beautiful Obsession", 
      desc: "They say time fades everything, but my pull towards you only grows deeper. This isn't just a fleeting attraction; it's a gravity I have absolutely no intention of escaping." 
    },
    { 
      title: "Logic vs. Magic", 
      desc: "I have always been a creature of logic and calculated moves. But you... you are pure, unadulterated chaos. And honestly? I prefer this beautiful chaos over any logic." 
    },
    { 
      title: "The Ultimate Reality", 
      desc: "You aren't a fleeting thought or a distant dream. You are my most beautiful reality—one I want to live in, breathe in, and experience until my very last breath." 
    }
  ];

  return (
    <section className="py-32 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-serif text-purple-500 mb-20 italic underline decoration-purple-900/40 underline-offset-[12px]"
        >
          How It All Began
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {cards.map((card, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(147, 51, 234, 0.4)' }} 
              className="p-10 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm transition-all"
            >
              <div className="text-purple-500 font-mono text-sm mb-4 tracking-widest">CHAPTER 0{i+1}</div>
              <h3 className="text-3xl text-white font-serif mb-6">{card.title}</h3>
              <p className="text-zinc-400 font-light italic leading-loose text-lg">"{card.desc}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}