// ─── Shared Backend Types ────────────────────────────────

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

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
}

/** Standard API response envelope */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
