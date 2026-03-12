import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Heart, Sparkles, ShieldCheck } from 'lucide-react';

export default function Login({ onUnlock }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === 'sejal') {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
      setPassword('');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 flex items-center justify-center bg-[#050505] z-[999] px-4"
    >
      {/* Animated Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/10 blur-[150px] rounded-full" />
      
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative w-full max-w-[450px]"
      >
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-2 text-rose-500/50">
          <Sparkles size={20} className="animate-pulse" />
          <Heart size={20} className="animate-bounce" />
          <Sparkles size={20} className="animate-pulse" />
        </div>

        <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/5 p-10 rounded-[2.5rem] shadow-2xl overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-rose-600 to-rose-400 flex items-center justify-center shadow-[0_0_40px_rgba(225,29,72,0.4)]"
              >
                {password.toLowerCase() === 'sejal' ? <Unlock size={35} color="white" /> : <Lock size={35} color="white" />}
              </motion.div>
            </div>

            <h2 className="text-3xl font-serif text-center text-white mb-2">Private Access</h2>
            <p className="text-zinc-500 text-center text-sm mb-10 italic">"Ssshh... Only for the Birthday Girl"</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Secret Key"
                  className={`w-full bg-black/50 border ${error ? 'border-red-500' : 'border-white/10'} focus:border-rose-500 py-4 px-6 rounded-2xl text-center text-rose-100 outline-none transition-all tracking-[0.4em] placeholder:tracking-normal`}
                />
                <AnimatePresence>
                  {error && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute -bottom-6 left-0 right-0 text-center text-[10px] text-red-500 uppercase font-bold">
                      Wait! That's not your name!
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-rose-600 hover:bg-rose-500 py-4 rounded-2xl text-white font-bold uppercase text-xs tracking-[0.2em] shadow-xl shadow-rose-900/20 transition-all flex items-center justify-center gap-3"
              >
                {isHovered ? "Ready Sejal?" : "Unlock the Magic"}
                <ShieldCheck size={16} />
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}