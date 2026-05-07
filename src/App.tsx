import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Check for user preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Add/remove dark class to HTML element when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <Background />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Projects />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;