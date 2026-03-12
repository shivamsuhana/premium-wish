import { motion } from 'framer-motion';

export default function StoryLine() {
  const cards = [
    { 
      title: "The Beautiful Trap", 
      desc: "They call it falling in love. I call it walking willingly into a beautiful trap. The exact second our eyes met, my logic died, and I knew I was never leaving." 
    },
    { 
      title: "The Villain's Vow", 
      desc: "In every traditional story, the hero sacrifices the girl to save the world. I am no hero. I would gladly burn the entire world to ashes just to keep you warm." 
    },
    { 
      title: "Sweet Torment", 
      desc: "You are the most exquisite kind of chaos. A storm I desperately want to get lost in. Ruin my peace, tear down my sanity—just don't ever stop looking at me like that." 
    },
    { 
      title: "No Escape", 
      desc: "There is no alternate universe where you aren't mine. You didn't just capture my attention; you hijacked my very soul. And honestly? I absolutely love the captivity." 
    }
  ];

  return (
    <section className="py-32 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-serif text-purple-500 mb-20 italic underline decoration-purple-900/40 underline-offset-[12px]"
        >
          The Descent
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