import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../constants'; // Ensure this path matches your project structure

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // Smooth easing
      },
    },
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden z-10">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects.
          </h2>
          <p className="text-lg text-gray-400 font-light">
            A curated selection of my recent work and technical experiments.
          </p>
        </motion.div>
        
        {/* Minimalist Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'all' 
                ? 'bg-white text-black' 
                : 'bg-transparent text-gray-400 border border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            All
          </motion.button>
          {allTags.map(tag => (
            <motion.button 
              key={tag}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setFilter(tag)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === tag 
                  ? 'bg-white text-black' 
                  : 'bg-transparent text-gray-400 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/[0.07]"
            >
              {/* Image Container with Hover Zoom */}
              <div className="h-64 overflow-hidden relative border-b border-white/10">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              {/* Content Container */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 font-light leading-relaxed mb-8 h-12 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Sleek Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs font-medium rounded-full tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Minimalist Action Buttons */}
                <div className="flex space-x-4 pt-4 border-t border-white/10">
                  {project.demoUrl && (
                    <motion.a 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.demoUrl}
                      className="flex items-center px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-2" /> Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.githubUrl}
                      className="flex items-center px-5 py-2.5 rounded-full bg-transparent border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-2" /> View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;