import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sparkles, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';

export default function Hero3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 
    window.addEventListener('resize', checkMobile); 
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const limitPan = (e) => {
    const target = e.target.target; 
    target.x = Math.max(-2, Math.min(2, target.x));
    target.y = Math.max(-2, Math.min(2, target.y));
    target.z = Math.max(-2, Math.min(2, target.z));
  };

  return (
    <div className="h-screen w-full relative bg-[#050505] overflow-hidden">
      
      {/* 3D BACKGROUND YAHA SE ST HO RA*/}
      <div className="absolute inset-0 z-0">
        <Canvas 
          camera={{ position: [0, 0, 5] }} 
          style={isMobile ? { touchAction: 'auto', pointerEvents: 'none' } : { touchAction: 'none', pointerEvents: 'auto' }}
        >
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#fb7185" />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
          <Sparkles count={300} scale={12} size={1.5} speed={0.4} color="#e11d48" />
          
          <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
            <mesh>
              <sphereGeometry args={[1.4, 128, 128]} />
              <MeshDistortMaterial 
                color="#e11d48" speed={4} distort={0.4} metalness={0.9} roughness={0.1} emissive="#330000"
              />
            </mesh>
          </Float>
          
          <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={!isMobile} 
            enableRotate={!isMobile} 
            autoRotate 
            autoRotateSpeed={1} 
            onChange={limitPan} 
          />
        </Canvas>
      </div>

      {/* TEXT OVERLAY WLA DABBA */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="flex flex-col items-center w-full">
          
          <motion.p initial={{ letterSpacing: "0.2em" }} animate={{ letterSpacing: "0.8em" }} className="text-rose-500 font-light mb-4 text-sm md:text-base tracking-widest z-10">
            MY LETHAL
          </motion.p>
          
          {/* isliye lagana para taki mai isme dono words ko centre me align karu  */}
          <div className="relative flex items-center justify-center w-full py-4">
            {/* Background word */}
            <h1 className="absolute text-7xl md:text-[14rem] font-serif text-white/5 select-none z-0 tracking-[0.1em] whitespace-nowrap">
              OBSESSION
            </h1>
            {/* Foreground word */}
            <h2 className="relative text-7xl md:text-[10rem] font-serif text-white drop-shadow-2xl leading-none z-10">
              RUIN
            </h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 1 }}
            className="max-w-md mx-auto px-6 pt-8 mt-6 border-t border-rose-900/50 z-10"
          >
            <p className="text-zinc-400 font-light italic text-sm md:text-base tracking-wide text-center">
              "Your aesthetics could start wars, but that sharp tongue of yours is my absolute addiction. Keep cursing at me; it only solidifies your fate with mine."
            </p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}