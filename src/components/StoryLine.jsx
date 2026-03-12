import { motion } from 'framer-motion';

export default function StoryLine() {
  const cards = [
    { 
      title: "The Silent Shift", 
      desc: "Ek ajeeb sa shor tha sab jagah, aur fir tum mili. Tumhari aawaz me wo thehraav tha jisne mere andar ke saare shor ko shant kar diya. Pata hi nahi chala kab tum aadat ban gayi." 
    },
    { 
      title: "The Beautiful Obsession", 
      desc: "Log kehte hain waqt ke sath aadat badal jati hai, par meri aadat ab tumhari aur gehrai me utarne ki ho gayi hai. Ye koi normal attraction nahi hai, ye ek aisi zaroorat hai jiske bina din adhoora lagta hai." 
    },
    { 
      title: "Logic vs. Magic", 
      desc: "Main hamesha se logic aur practical baaton me uljha raha, aur tum... tum pure chaos aur magic ho. Aur sach batau? Mujhe apne logic se zyada is chaos me jeena pasand aa raha hai." 
    },
    { 
      title: "The Ultimate Reality", 
      desc: "Tum koi sapna ya khayal nahi ho, tum meri sabse khoobsurat haqeeqat ho. Ek aisi haqeeqat jise main apni aakhiri saans tak mehsoos karna aur jeena chahta hu." 
    }
  ];

  return (
    <section className="py-32 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-serif text-rose-500 mb-20 italic underline decoration-rose-900/40 underline-offset-[12px]"
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
              whileHover={{ scale: 1.02, borderColor: 'rgba(225, 29, 72, 0.4)' }} 
              className="p-10 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm transition-all"
            >
              <div className="text-rose-600 font-mono text-sm mb-4 tracking-widest">CHAPTER 0{i+1}</div>
              <h3 className="text-3xl text-white font-serif mb-6">{card.title}</h3>
              <p className="text-zinc-400 font-light italic leading-loose text-lg">"{card.desc}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}