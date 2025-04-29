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
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(241,245,249,0.05)_0.8px,transparent_0.8px),linear-gradient(90deg,rgba(241,245,249,0.05)_0.8px,transparent_0.8px)] dark:bg-[linear-gradient(rgba(15,23,42,0)_0.8px,transparent_0.8px),linear-gradient(90deg,rgba(15,23,42,0)_0.8px,transparent_0.8px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300">
            Technologies and tools I've worked with and enjoy using
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-500 dark:to-violet-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] dark:shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-white/10 backdrop-blur-sm border border-slate-200 dark:border-white/10'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {filteredSkills.map(skill => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-center text-center"
            >
              <motion.div 
                className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-125"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="font-medium text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 dark:group-hover:from-blue-400 dark:group-hover:to-violet-400 group-hover:bg-clip-text transition-all duration-300">
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