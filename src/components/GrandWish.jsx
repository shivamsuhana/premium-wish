import { motion } from 'framer-motion';

export default function GrandWish() {
  return (
    <section className="h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-rose-950/20 blur-[180px] rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center px-4"
      >
        <h3 className="text-rose-600 tracking-[1.5em] uppercase text-[12px] mb-8 font-bold">The Final Sovereign Claim</h3>

        <h1 className="text-6xl md:text-[10rem] font-serif text-white mb-10 leading-none tracking-tighter">
          SOLELY & <br/> 
          <span className="text-rose-700 drop-shadow-[0_0_50px_rgba(225,29,72,0.6)] italic">BOUND</span>
        </h1>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} className="space-y-6">
          <p className="text-zinc-400 max-w-2xl mx-auto italic font-light text-xl md:text-2xl leading-relaxed">
            "Your defiance was a challenge I accepted the moment I saw you. Now, there is no escape. No world exists for you outside of my shadow."
          </p>
          
          <div className="pt-12">
            <p style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }} className="text-7xl md:text-9xl text-white/90 -rotate-2">
              krishu
            </p>
          </div>
        </motion.div>
        
        <div className="mt-24 h-32 w-[1px] bg-gradient-to-b from-rose-700 via-rose-900 to-transparent mx-auto opacity-50" />
      </motion.div>
    </section>
  );
}