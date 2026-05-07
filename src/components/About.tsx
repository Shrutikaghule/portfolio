import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, GraduationCap, Terminal } from 'lucide-react';
import RESUME from '../assets/RESUME.pdf';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="about" className="py-32 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto"
        >
          {/* Left Column: Abstract Code Window */}
          <motion.div variants={itemVariants} className="relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-none">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
            
            {/* Floating Glass Terminal */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-[2rem] bg-black/40 border border-white/10 backdrop-blur-md overflow-hidden shadow-2xl"
            >
              {/* Terminal Header */}
              <div className="bg-white/5 px-6 py-4 flex items-center border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
                <div className="flex-1 text-center flex justify-center items-center">
                  <Terminal size={14} className="text-gray-500 mr-2" />
                  <span className="text-xs text-gray-500 font-medium tracking-widest uppercase">developer.ts</span>
                </div>
              </div>

              {/* Terminal Body / Code Snippet */}
              <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
                <div className="flex">
                  <span className="text-gray-600 w-8 select-none">1</span>
                  <span className="text-gray-400"><span className="text-white font-medium">const</span> developer <span className="text-white">=</span> {"{"}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-8 select-none">2</span>
                  <span className="text-gray-400 ml-4 lg:ml-8">name: <span className="text-gray-100">'Shrutika Ghule'</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-8 select-none">3</span>
                  <span className="text-gray-400 ml-4 lg:ml-8">role: <span className="text-gray-100">'Full-Stack Engineer'</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-8 select-none">4</span>
                  <span className="text-gray-400 ml-4 lg:ml-8">location: <span className="text-gray-100">'Pune, MH'</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-8 select-none">5</span>
                  <span className="text-gray-400 ml-4 lg:ml-8">skills: [</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-8 select-none">6</span>
                  <span className="text-gray-100 ml-8 lg:ml-16">'React'</span><span className="text-gray-400">, </span>
                  <span className="text-gray-100 ml-2">'Next.js'</span><span className="text-gray-400">,</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-8 select-none">7</span>
                  <span className="text-gray-100 ml-8 lg:ml-16">'TypeScript'</span><span className="text-gray-400">, </span>
                  <span className="text-gray-100 ml-2">'Node.js'</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-8 select-none">8</span>
                  <span className="text-gray-400 ml-4 lg:ml-8">],</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-8 select-none">9</span>
                  <span className="text-gray-400 ml-4 lg:ml-8">status: <span className="text-white">()</span> <span className="text-white">&gt;</span> <span className="text-gray-100">'Building'</span></span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 w-8 select-none">10</span>
                  <span className="text-gray-400">{"}"};</span>
                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="w-2 h-4 bg-white ml-2"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
              About Me.
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-lg text-gray-400 font-light leading-relaxed">
                I’m Shrutika Ghule, a Full-Stack Developer and AI Enthusiast with a strong background in creating responsive, user-friendly web applications. I’m passionate about solving real-world problems with technology and always eager to explore new frameworks to apply best practices.
              </p>

              <p className="text-lg text-gray-400 font-light leading-relaxed">
                When I'm not coding, you can find me hiking, reading fiction novels, or experimenting with
                new cooking recipes. I am committed to continuous learning and actively seek opportunities to expand my skills and stay current with the latest developments in technology.
              </p>
            </div>

            {/* Sleek Education Block */}
            <div className="mb-10 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  Education
                </h3>
              </div>
              <div className="pl-9 border-l border-white/10 ml-3">
                <h4 className="text-white font-medium text-lg mb-1">
                  B.Tech in Artificial Intelligence and Data Science
                </h4>
                <p className="text-gray-500 font-light text-sm tracking-wide">
                  Vishwakarma Institute Of Information Technology • 2025
                </p>
              </div>
            </div>

            {/* Minimalist Action Button */}
            <div>
              <a
                href={RESUME}
                download="Shrutika_Ghule_Resume.pdf"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-medium transition-all duration-300 hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] group"
              >
                Download Resume
                <Download size={18} className="ml-2 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;