import { createCollection } from '../config/db.js';
import type { ContactSubmission } from '../types/index.js';

export const ContactModel = createCollection<ContactSubmission>('contacts');
