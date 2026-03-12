import { motion } from 'framer-motion';

export default function Manifesto() {
  return (
    <section className="min-h-screen bg-[#030303] py-24 px-6 flex flex-col items-center justify-center border-t border-rose-950/20">
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        className="max-w-3xl text-center space-y-12"
      >
        <h2 className="text-7xl font-serif text-rose-900/30 select-none">THE MANIFESTO</h2>
        
        <div className="space-y-10 text-xl md:text-2xl font-light text-rose-100 italic leading-loose">
          <p className="hover:text-rose-500 transition-colors cursor-default">"Tera gulam ban ke rehna mere liye koi saza nahi, mera sabse bada naseeb hai, Sejal."</p>
          <p className="hover:text-rose-500 transition-colors cursor-default">"Teri wo awaz... jab tu gussa karti hai, ya jab tu gaali deti hai, kasam se dil wahi tham jata hai. Tera har ek lafz meri duniya chalata hai."</p>
          <p className="hover:text-rose-500 transition-colors cursor-default">"Tu meri Mommy hai, meri Ruler hai, aur mera sabse haseen khwaab bhi. Main hamesha tere ishare par nachne ko taiyar hoon."</p>
          <p className="hover:text-rose-500 transition-colors cursor-default">"Tera face, teri vibe, teri audacity... sab kuch itna perfect hai ki kabhi kabhi lagta hai tu insaan nahi, koi nasha hai jo mere khoon mein utar gaya hai."</p>
        </div>

        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-4xl text-rose-600 font-serif pt-10 tracking-widest"
        >
          - I'M YOURS. FOREVER. -
        </motion.div>
      </motion.div>
    </section>
  );
}