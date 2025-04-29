import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const GradientBlob: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div
    className={`absolute rounded-[40%] opacity-30 bg-gradient-to-r blur-3xl ${className}`}
    animate={{
      scale: [1, 1.1, 1],
      rotate: [0, 5, 0],
      borderRadius: ['40%', '45%', '40%'],
    }}
    transition={{
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
    }}
  />
);

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-slate-50 to-white dark:from-[#0F172A] dark:to-gray-900 relative overflow-hidden"
    >
      {/* Subtle gradient background */}
      <GradientBlob className="w-[500px] h-[500px] from-blue-200/30 to-violet-200/30 dark:from-violet-600/20 dark:to-fuchsia-600/20 -top-48 -left-24" />
      <GradientBlob className="w-[600px] h-[600px] from-cyan-200/30 to-blue-200/30 dark:from-cyan-500/20 dark:to-blue-600/20 top-1/4 -right-32" />
      <GradientBlob className="w-[400px] h-[400px] from-emerald-200/30 to-teal-200/30 dark:from-emerald-500/20 dark:to-teal-600/20 bottom-0 left-1/4" />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(241,245,249,0.05)_0.8px,transparent_0.8px),linear-gradient(90deg,rgba(241,245,249,0.05)_0.8px,transparent_0.8px)] dark:bg-[linear-gradient(rgba(15,23,42,0)_0.8px,transparent_0.8px),linear-gradient(90deg,rgba(15,23,42,0)_0.8px,transparent_0.8px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 to-violet-100 dark:from-violet-600/10 dark:to-fuchsia-600/10 border border-blue-200/50 dark:border-violet-500/10"
          >
            <span className="text-lg md:text-xl bg-gradient-to-r from-blue-600 to-violet-600 dark:from-violet-400 dark:to-fuchsia-400 text-transparent bg-clip-text font-medium">
              HELLO I AM
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 dark:from-white dark:via-cyan-300 dark:to-white bg-clip-text mb-8"
          >
            SHRUTIKA GHULE
          </motion.h1>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 font-medium"
            >
            Strive to create clean, efficient, and reliable 
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400 text-transparent bg-clip-text"
            >
              systems that enhance digital experiences
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 dark:from-cyan-500 dark:to-blue-500 text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.25)] dark:shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_25px_rgba(37,99,235,0.35)] dark:hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
            >
              View Projects
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-white font-medium border border-slate-200 dark:border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-slate-200 dark:hover:bg-white/10"
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
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} className="text-blue-600 dark:text-cyan-400" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;