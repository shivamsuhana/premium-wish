import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Heart, Sparkles, ShieldCheck, Eye, EyeOff } from 'lucide-react';

export default function Login({ onUnlock }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === 'krishu') {
      onUnlock();
      setAttempts(0);
    } else {
      setError(true);
      setAttempts(prev => prev + 1);
      setTimeout(() => setError(false), 2500);
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
      role="dialog"
      aria-label="Login to access private content"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/10 blur-[150px] rounded-full animate-pulse" />
      
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative w-full max-w-[450px]"
      >
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-2 text-rose-500/50">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
            <Sparkles size={20} />
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <Heart size={20} />
          </motion.div>
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
            <Sparkles size={20} />
          </motion.div>
        </div>

        <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/5 p-10 rounded-[2.5rem] shadow-2xl overflow-hidden hover:border-white/10 transition-colors duration-300">
          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-rose-600 to-rose-400 flex items-center justify-center shadow-[0_0_40px_rgba(225,29,72,0.4)] cursor-pointer"
              >
                {password.length > 0 ? <Unlock size={35} color="white" /> : <Lock size={35} color="white" />}
              </motion.div>
            </div>

            <h2 className="text-3xl font-serif text-center text-white mb-2">Private Access</h2>
            <p className="text-zinc-500 text-center text-sm mb-10 italic">"Ssshh... Only for the Birthday Girl"</p>

            {attempts > 0 && (
              <motion.p 
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-xs text-amber-400/70 mb-4"
              >
                💡 Hint: It's your sweetheart's name (lowercase)
              </motion.p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="relative flex items-center">
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Secret Key"
                    aria-label="Enter password"
                    className={`w-full bg-black/50 border ${error ? 'border-red-500 shadow-lg shadow-red-500/20' : 'border-white/10'} focus:border-rose-500 focus:shadow-lg focus:shadow-rose-500/10 py-4 px-6 pr-12 rounded-2xl text-center text-rose-100 outline-none transition-all tracking-[0.4em] placeholder:tracking-normal`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-zinc-400 hover:text-rose-400 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <AnimatePresence>
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 5 }} 
                      exit={{ opacity: 0, y: -10 }} 
                      className="absolute -bottom-8 left-0 right-0 flex flex-col items-center gap-1"
                    >
                      <p className="text-[11px] text-red-400 uppercase font-bold">❌ Not quite...</p>
                      {attempts >= 3 && (
                        <p className="text-[10px] text-amber-300 italic">Try thinking about love...</p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-500 py-4 rounded-2xl text-white font-bold uppercase text-xs tracking-[0.2em] shadow-xl shadow-rose-900/20 transition-all flex items-center justify-center gap-3"
                aria-label="Unlock the magic"
              >
                {isHovered ? "Ready baiby?" : "Unlock the Magic"}
                <ShieldCheck size={16} />
              </motion.button>
            </form>

            <p className="text-center text-xs text-zinc-500 mt-6">
              <span className="opacity-50">Attempts: {attempts}</span>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}