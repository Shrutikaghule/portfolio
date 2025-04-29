export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface TechSkill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface NavItem {
  label: string;
  href: string;
}