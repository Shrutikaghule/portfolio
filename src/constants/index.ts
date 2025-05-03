import { Project } from '../types';
import { TechSkill } from '../types';
import spotify from '../assets/spotify.jpg'
import payment from '../assets/p.png'

const projects: Project[] = [
    {
      id: 1,
      title: 'Payment Gateway System',
      description: 'Developed a high-performance System using a TurboRepo architecture. The system handles real-time financial transactions between users and banks.',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Express.js', 'Docker'],
      imageUrl: payment,
      demoUrl: '#',
      githubUrl: 'https://github.com/Shrutikaghule/Payment-gateway-system',
    },
    {
      id: 2,
      title: 'Spotify clone',
      description: 'Spotify-like web application that enables users to both upload and stream music.',
      tags: ['Next.js', 'Typescript' ,'Supabase', 'Stripe', 'Express.js'],
      imageUrl: spotify,
      demoUrl: '#',
      githubUrl: 'https://github.com/Shrutikaghule/spotify-clone',
    },
    {
      id: 3,
      title: 'Medium clone',
      description: 'Medium-like blogging platform where users can create, edit, and share articles.',
      tags: ['Next.js', 'Cloudfare workers', 'Typescript'],
      imageUrl: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  const techSkills: TechSkill[] = [
    // Frontend
    { name: 'React', icon: '⚛️', category: 'frontend' },
    { name: 'TypeScript', icon: '🔷', category: 'frontend' },
    { name: 'JavaScript', icon: '🟨', category: 'frontend' },
    { name: 'HTML5', icon: '🌐', category: 'frontend' },
    { name: 'CSS3', icon: '🎨', category: 'frontend' },
    { name: 'Tailwind CSS', icon: '🌊', category: 'frontend' },
    { name: 'Redux', icon: '🔄', category: 'frontend' },
    { name: 'Next.js', icon: '⏭️', category: 'frontend' },
    
    // Backend
    { name: 'Node.js', icon: '🟢', category: 'backend' },
    { name: 'Express', icon: '🚂', category: 'backend' },
    { name: 'MongoDB', icon: '🍃', category: 'backend' },
    { name: 'PostgreSQL', icon: '🐘', category: 'backend' },
    { name: 'Firebase', icon: '🔥', category: 'backend' },
    { name: 'GraphQL', icon: '⬢', category: 'backend' },
    
    // Tools
    { name: 'Git', icon: '🔄', category: 'tools' },
    { name: 'Docker', icon: '🐳', category: 'tools' },
    { name: 'Webpack', icon: '📦', category: 'tools' },
    { name: 'Jest', icon: '🃏', category: 'tools' },
    { name: 'VS Code', icon: '📝', category: 'tools' },
    { name: 'GitHub Actions', icon: '🔄', category: 'tools' },
    
 
  ];
  

  export {projects, techSkills};