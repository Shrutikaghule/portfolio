import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { techSkills } from '../constants';

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' }
  ];

  const filteredSkills = techSkills.filter(skill => 
    skill.category === activeCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="skills" className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Technical Arsenal.
          </h2>
          <p className="text-lg text-gray-400 font-light">
            The frameworks, languages, and tools I use to build digital experiences.
          </p>
        </motion.div>
        
        {/* Minimalist Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-white text-black'
                  : 'bg-transparent text-gray-400 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {filteredSkills.map(skill => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group relative bg-white/[0.02] border border-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1"
            >
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="text-4xl md:text-5xl mb-4 text-gray-400 group-hover:text-white transition-all duration-500 transform group-hover:scale-110 drop-shadow-lg">
                {skill.icon}
              </div>
              <h3 className="font-medium text-sm md:text-base text-gray-400 tracking-wide group-hover:text-white transition-colors duration-500">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;