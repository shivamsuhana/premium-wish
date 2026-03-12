import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpecialPage() {
  const [showPopup, setShowPopup] = useState(false);

  const cards = [
    { text: "Tumhari aankhon me dekh kar lagta hai jaise kisi gehre samundar me doob raha hu... aur sach kahu? Mujhe tairna nahi aata, aur main bachna bhi nahi chahta." },
    { text: "Tumhari wo achanak aane wali muskurahat aur gusse me mujhe dekhna... kisi din meri jaan le legi, par kya khoobsurat maut hogi wo." },
    { text: "Duniya ke liye tum ek normal insaan ho sakti ho, par mere liye? Tum wo art ho jise main umar bhar bina palke jhapkaye dekh sakta hu." },
    { text: "Mujhe azaadi se koi pyar nahi hai agar uski keemat tumhari baahon se door jana ho. Tumhari maujudgi hi mera sabse bada sukoon hai." },
    { text: "Tumhari aawaz mere dimaag me ek loop ki tarah chalti hai. Isko obsession kaho ya ishq, par iske bina mera din khatam nahi hota." },
    { text: "Main chahta hu ki mere har kal me tumhara aaj ho. Tumhari khushi, tumhara gussa, tumhare nakhre... in sab par sirf aur sirf mera haq ho." }
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-950/30 via-[#030303] to-[#000000] py-24 px-4 relative overflow-hidden flex flex-col items-center">
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-serif text-rose-600/80 mb-20 italic text-center drop-shadow-[0_0_20px_rgba(225,29,72,0.3)]"
      >
        Midnight Confessions
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full mb-24 z-10">
        {cards.map((card, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.15 }}
            whileHover={{ y: -10, borderColor: '#e11d48', backgroundColor: 'rgba(225,29,72,0.05)' }}
            className="p-8 rounded-3xl bg-zinc-950/80 border border-white/5 backdrop-blur-md shadow-2xl flex items-center justify-center text-center transition-all duration-300"
          >
            <p className="text-zinc-300 text-lg font-light italic leading-relaxed">"{card.text}"</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 40px rgba(225, 29, 72, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowPopup(true)}
        className="z-10 px-12 py-6 rounded-full bg-rose-700 hover:bg-rose-600 text-white font-serif text-xl tracking-[0.3em] uppercase shadow-2xl transition-all"
      >
        Open My Letter
      </motion.button>

      {/*grand wish jo pop up hoga*/}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl px-4 py-10 overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-[#050505] p-10 md:p-16 rounded-[2rem] border border-rose-600/30 max-w-3xl w-full relative shadow-[0_0_150px_rgba(225,29,72,0.15)] my-auto"
            >
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-6 right-8 text-zinc-600 hover:text-rose-500 text-3xl transition-colors"
              >
                ✕
              </button>
              
              <div className="text-center mb-10">
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">
                  MY ETERNAL <br/> 
                  <span className="text-rose-600 drop-shadow-[0_0_15px_rgba(225,29,72,0.6)] mt-2 block text-5xl md:text-8xl">MUSE</span>
                </h1>
                <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto" />
              </div>
              
              <div className="space-y-6 text-lg md:text-xl text-zinc-300 font-light italic leading-loose text-justify">
                <p>
                  Tum sirf ek hissa nahi ho meri zindagi ka, tum wo dhun ho jiske bina meri har heartbeat adhoori hai. Jab tum aas-paas hoti ho, toh baaki saari duniya gayab ho jati hai.
                </p>
                <p>
                  Main koi perfect insaan nahi hu, par tumhare sath hona mujhe mehsoos karata hai ki main kuch bhi kar sakta hu. Tumhari wo pyari si baatein, tumhara nakhra, aur tumhari aankhein—in sabne milkar mujhe poori tarah se apna bana liya hai. 
                </p>
                <p>
                  Ye sirf ek message nahi hai, ye ek confession hai ki main tumhe har din, har pal utna hi chahta hu. Hamesha aise hi muskurati rehna, aur hamesha meri rehna.
                </p>
              </div>
              
              <div className="text-right mt-16">
                <p className="text-rose-500/60 text-xs tracking-[0.4em] uppercase mb-2">Yours, Always,</p>
                <p className="text-5xl font-serif text-white italic drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">neyno</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}