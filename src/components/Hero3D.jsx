import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sparkles, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';

export default function Hero3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // screan size dtct
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Pehli baar check karega
    window.addEventListener('resize', checkMobile); // Agar screen size badle toh update karega
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="h-screen w-full relative bg-[#050505] overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Canvas 
          camera={{ position: [0, 0, 5] }} 
          //device ke acc kam karega
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
                color="#e11d48" 
                speed={4} 
                distort={0.4} 
                metalness={0.9} 
                roughness={0.1}
                emissive="#330000"
              />
            </mesh>
          </Float>
          
          <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
          
          {/* Mobile pe rotate off rahega laptop pe on pan mai bd me chng krunga */}
<OrbitControls enableZoom={false} enablePan={true} enableRotate={!isMobile} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-8xl md:text-[12rem] font-serif text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
            QUEEN
          </h1>
          <div className="relative text-center">
            <motion.p initial={{ letterSpacing: "0.2em" }} animate={{ letterSpacing: "0.8em" }} className="text-rose-500 font-light mb-2">HAPPY BIRTHDAY</motion.p>
            <h2 className="text-7xl md:text-9xl font-serif text-white drop-shadow-2xl">RADHA</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
}