import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function StoryLine() {
  const [expandedCard, setExpandedCard] = useState(null);

  const cards = [
    { 
      title: "The Fractured Reality", 
      desc: "I didn't fall; I willingly plummeted into your chaos. The exact second our eyes locked, my world shattered, and I have absolutely no desire to rebuild it without you. You rewired every circuit in my consciousness.",
      color: "from-rose-600 to-rose-400"
    },
    { 
      title: "The Lethal Oath", 
      desc: "I am no hero looking for redemption. A hero sacrifices the one he loves to save the world. I would gladly reduce the entire world to ash just to keep your shadows warm. You are my only religion.",
      color: "from-rose-700 to-rose-500"
    },
    { 
      title: "Absolute Torment", 
      desc: "You are the storm I refuse to escape. Tear down my sanity, ruin my peace, do whatever it takes—just never break that piercing eye contact. Your chaos is my serenity.",
      color: "from-rose-500 to-rose-300"
    },
    { 
      title: "Inevitable Gravity", 
      desc: "There is no alternate dimension where you aren't mine. You didn't just catch my attention; you hijacked my very existence. And I am fiercely addicted to the captivity. Forever.",
      color: "from-rose-600 to-rose-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: (isLeft) => ({ 
      opacity: 0, 
      x: isLeft ? -50 : 50,
      y: 30
    }),
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { duration: 0.7, type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-zinc-950 to-[#080808] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-rose-900/10 blur-[180px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/5 blur-[180px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-serif text-rose-500 mb-4 italic text-center leading-tight"
        >
          The Descent Into Devotion
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-zinc-400 text-sm md:text-base mb-20 max-w-2xl mx-auto"
        >
          Four sacred pacts bound by eternal obsession
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              custom={i % 2 === 0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(225, 29, 72, 0.6)' }} 
              onClick={() => setExpandedCard(expandedCard === i ? null : i)}
              className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-md transition-all cursor-pointer group overflow-hidden relative"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-rose-600/80 font-mono text-sm tracking-widest">PACT 0{i+1}</div>
                  <motion.div
                    animate={{ rotate: expandedCard === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-rose-500/60"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </div>

                <h3 className="text-2xl md:text-3xl text-white font-serif mb-4 group-hover:text-rose-400 transition-colors">
                  {card.title}
                </h3>

                <motion.p 
                  initial={{ height: "auto", opacity: 1 }}
                  animate={{ 
                    height: expandedCard === i ? "auto" : "80px",
                    opacity: 1
                  }}
                  transition={{ duration: 0.4 }}
                  className="text-zinc-400 font-light italic leading-relaxed text-base md:text-lg overflow-hidden"
                >
                  "{card.desc}"
                </motion.p>

                {expandedCard === i && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-rose-400/60 text-xs mt-4 pt-4 border-t border-rose-600/20"
                  >
                    ~ A vow bound by eternity
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-rose-600 to-transparent mt-24 origin-center"
        />
      </div>
    </section>
  );
}