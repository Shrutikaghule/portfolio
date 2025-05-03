import React from 'react';
import robo from '../assets/robo.png'
import RESUME from '../assets/RESUME.pdf'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-center ">
          <div className="lg:w-1/2 pl-20">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-80 h-80 md:w-80 md:h-100 relative rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl mx-auto lg:mx-0">
                  <img
                    src={robo}
                    alt="Portrait"
                    className="w-full h-full object-cover"
                  />

                </div>

              </div>
            </div>
          </div>


          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I’m Shrutika Ghule, a Full-Stack Developer and AI Enthusiast with a strong background in creating responsive, user-friendly web applications. I’m passionate about solving real-world problems with technology and always eager to explore new new technologies to apply the best practices.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with
              new cooking recipes. I am committed to continuous learning and actively seek opportunities to expand my skills and stay current with the latest developments in technology.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Education
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Btech in Artificial Inelligence and Data Science</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Vishwakarma Institute Of Information Technology, 2025</p>
                  </li>
                </ul>
              </div>

            </div>

            <a
              href={RESUME}
              download
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-700 to-violet-700 dark:from-blue-600 dark:to-violet-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] dark:shadow-[0_0_20px_rgba(59,130,246,0.5)]transition-colors hover:shadow-lg
              "
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;