import { createCollection } from '../config/db.js';
import type { Project } from '../types/index.js';

export const ProjectModel = createCollection<Project>('projects');
