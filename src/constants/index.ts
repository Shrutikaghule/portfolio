import { Project } from '../types';
import { TechSkill } from '../types';

const projects: Project[] = [
    {
      id: 1,
      title: 'Payment Gateway System',
      description: 'Developed a high-performance System using a TurboRepo architecture. The system handles real-time financial transactions between users and banks.',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Node.js', 'Docker'],
      imageUrl: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      githubUrl: 'https://github.com/Shrutikaghule/Payment-gateway-system',
    },
    {
      id: 2,
      title: 'Real-time Chat App',
      description: 'A real-time messaging platform with read receipts and file sharing capabilities.',
      tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
      imageUrl: 'https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Personal Finance Dashboard',
      description: 'An analytics dashboard for tracking expenses and visualizing spending habits.',
      tags: ['React', 'Chart.js', 'Node.js', 'PostgreSQL'],
      imageUrl: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'A sleek weather application with 7-day forecasts and location-based recommendations.',
      tags: ['React', 'Redux', 'OpenWeather API'],
      imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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