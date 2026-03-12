import { motion } from 'framer-motion';

export default function StoryLine() {
  const cards = [
    { 
      title: "The Fractured Reality", 
      desc: "I didn't fall; I willingly plummeted into your chaos. The exact second our eyes locked, my world shattered, and I have absolutely no desire to rebuild it without you." 
    },
    { 
      title: "The Lethal Oath", 
      desc: "I am no hero looking for redemption. A hero sacrifices the one he loves to save the world. I would gladly reduce the entire world to ash just to keep your shadows warm." 
    },
    { 
      title: "Absolute Torment", 
      desc: "You are the storm I refuse to escape. Tear down my sanity, ruin my peace, do whatever it takes—just never break that piercing eye contact." 
    },
    { 
      title: "Inevitable Gravity", 
      desc: "There is no alternate dimension where you aren't mine. You didn't just catch my attention; you hijacked my very existence. And I am fiercely addicted to the captivity." 
    }
  ];

  return (
    <section className="py-32 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-serif text-rose-500 mb-20 italic underline decoration-rose-900/40 underline-offset-[12px]"
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
              whileHover={{ scale: 1.02, borderColor: 'rgba(225, 29, 72, 0.4)' }} 
              className="p-10 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm transition-all"
            >
              <div className="text-rose-600 font-mono text-sm mb-4 tracking-widest">PACT 0{i+1}</div>
              <h3 className="text-3xl text-white font-serif mb-6">{card.title}</h3>
              <p className="text-zinc-400 font-light italic leading-loose text-lg">"{card.desc}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}