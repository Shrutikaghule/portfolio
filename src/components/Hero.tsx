import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* 1. THE NEW GRID OVERLAY - A subtle, fading tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none z-0" />
      
      {/* 2. AMBIENT CENTER GLOW - Just enough to separate the text from the background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          
          {/* Sleeker, minimal badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="text-xs md:text-sm tracking-[0.2em] text-gray-400 font-medium uppercase">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Premium Silver/White Typography (Matches your first image) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-gradient-to-b from-white to-gray-400 bg-clip-text mb-8 drop-shadow-sm"
          >
            Shrutika Ghule.
          </motion.h1>

          <div className="space-y-2 max-w-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 font-light leading-relaxed"
            >
              I strive to create clean, efficient, and reliable systems that enhance digital experiences.
            </motion.p>
          </div>
          
          {/* Minimalist Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-full bg-white text-black font-medium transition-all duration-300 hover:bg-gray-200"
            >
              View Projects
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-full bg-transparent text-white font-medium border border-white/20 transition-all duration-300 hover:bg-white/10"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.a 
            href="#projects" 
            className="flex flex-col items-center gap-2 group"
            aria-label="Scroll down"
          >
            <span className="text-[10px] tracking-widest text-gray-500 uppercase group-hover:text-gray-300 transition-colors">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent group-hover:from-gray-300 transition-colors" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;