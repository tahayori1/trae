export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  layout: 'left' | 'right' | 'full';
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Stat {
  label: string;
  value: string;
  sub: string;
}

export enum SectionId {
  HOME = 'home',
  PHILOSOPHY = 'philosophy',
  PROJECTS = 'projects',
  TECHNOLOGY = 'technology',
  DEALERS = 'dealers',
  CONTACT = 'contact',
}