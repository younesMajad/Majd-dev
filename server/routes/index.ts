import { Router } from 'express';
import { router as projectRoutes } from './projectRoutes.js';
import { router as contactRoutes } from './contactRoutes.js';
import { router as testimonialRoutes } from './testimonialRoutes.js';

const router = Router();

// ─── Mount sub-routers ───────────────────────────────────
router.use('/projects', projectRoutes);
router.use('/contact', contactRoutes);
router.use('/testimonials', testimonialRoutes);

export { router };
