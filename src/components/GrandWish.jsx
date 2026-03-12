import { motion } from 'framer-motion';

export default function GrandWish() {
  return (
    <section className="h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/*blur wla ecoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-rose-900/10 blur-[180px] rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h3 className="text-rose-500 tracking-[1.2em] uppercase text-[10px] mb-8 opacity-60">The Final Declaration</h3>
        <h1 className="text-6xl md:text-9xl font-serif text-white mb-10 leading-tight">
          HAPPY BIRTHDAY <br/> <span className="text-rose-600 drop-shadow-[0_0_30px_rgba(225,29,72,0.4)]">MY EVERYTHING</span>
        </h1>
        <p className="text-zinc-500 max-w-lg mx-auto italic font-light text-lg">
          "Aaj ka din sirf tera hai, jaise mera har din sirf tera hai. Stay baddie, stay happy, and stay mine, Sejal."
        </p>
        
        <div className="mt-20 h-20 w-[1px] bg-gradient-to-b from-rose-600 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}