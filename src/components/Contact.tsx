import React, { useState, useRef } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      if (form.current) {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      setError(`Failed to send message: ${err?.text || err?.message || 'Please try again later.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Glassmorphic Card */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-sm">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Left Side: Info & CTA */}
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                  Ready to build something?
                </h2>
                <p className="text-lg text-gray-400 font-light leading-relaxed mb-10">
                  I'm currently looking for new opportunities or even an exiciting idea. 
                  Whether you have a question or just want to say hi, my inbox is open.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
                      <Mail className="w-5 h-5 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Email</p>
                      <a href="mailto:ghuleshrutika20@gmail.com" className="text-white hover:text-gray-300 transition-colors">
                        ghuleshrutika20@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
                      <MapPin className="w-5 h-5 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Location</p>
                      <p className="text-white">Pune, MH</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Shrutikaghule" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/shrutika-ghule" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://x.com/Shrutika110526" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Right Side: Contact Form */}
              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-8">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-gray-400">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl">
                        <p className="text-red-400 text-sm text-center">{error}</p>
                      </div>
                    )}
                    
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-white/30 text-white placeholder-gray-500 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-white/30 text-white placeholder-gray-500 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-white/30 text-white placeholder-gray-500 transition-colors resize-none"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;