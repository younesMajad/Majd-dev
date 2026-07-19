import { createCollection } from '../config/db.js';
import type { Testimonial } from '../types/index.js';

export const TestimonialModel = createCollection<Testimonial>('testimonials');
