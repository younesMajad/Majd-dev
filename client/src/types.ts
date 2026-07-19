export interface Project {
  id: string;
  title: string;
  category: 'Design' | 'Development' | 'Branding';
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  client: string;
  year: string;
  link: string;
  role: string;
  challenge: string;
  solution: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name
  features: string[];
}

export interface Experience {
  id: string;
  role: string;
  duration: string;
  description: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
}
