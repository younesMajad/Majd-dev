import { Router } from 'express';
import {
  getAllTestimonials,
  getTestimonialById,
  createTestimonial,
  deleteTestimonial,
} from '../controllers/testimonialController.js';

const router = Router();

router.get('/', getAllTestimonials);
router.get('/:id', getTestimonialById);
router.post('/', createTestimonial);
router.delete('/:id', deleteTestimonial);

export { router };
