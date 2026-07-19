import type { Request, Response, NextFunction } from 'express';
import { TestimonialModel } from '../models/Testimonial.js';
import type { ApiResponse, Testimonial } from '../types/index.js';

/**
 * GET /api/testimonials
 * Retrieve all testimonials.
 */
export async function getAllTestimonials(
  _req: Request,
  res: Response<ApiResponse<Testimonial[]>>,
  next: NextFunction
): Promise<void> {
  try {
    const testimonials = await TestimonialModel.getAll();
    res.json({ success: true, data: testimonials });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/testimonials/:id
 * Retrieve a single testimonial.
 */
export async function getTestimonialById(
  req: Request<{ id: string }>,
  res: Response<ApiResponse<Testimonial>>,
  next: NextFunction
): Promise<void> {
  try {
    const testimonial = await TestimonialModel.getById(req.params.id);
    if (!testimonial) {
      res.status(404).json({ success: false, error: 'Testimonial not found' });
      return;
    }
    res.json({ success: true, data: testimonial });
  } catch (error) {
    next(error);
  }
}

/**
 * POST /api/testimonials
 * Create a new testimonial.
 */
export async function createTestimonial(
  req: Request,
  res: Response<ApiResponse<Testimonial>>,
  next: NextFunction
): Promise<void> {
  try {
    const testimonial: Testimonial = {
      id: req.body.id || crypto.randomUUID(),
      name: req.body.name,
      role: req.body.role,
      company: req.body.company,
      avatar: req.body.avatar || '',
      text: req.body.text,
      rating: req.body.rating || 5,
    };

    const created = await TestimonialModel.create(testimonial);
    res.status(201).json({ success: true, data: created });
  } catch (error) {
    next(error);
  }
}

/**
 * DELETE /api/testimonials/:id
 * Delete a testimonial.
 */
export async function deleteTestimonial(
  req: Request<{ id: string }>,
  res: Response<ApiResponse<null>>,
  next: NextFunction
): Promise<void> {
  try {
    const deleted = await TestimonialModel.delete(req.params.id);
    if (!deleted) {
      res.status(404).json({ success: false, error: 'Testimonial not found' });
      return;
    }
    res.json({ success: true, message: 'Testimonial deleted' });
  } catch (error) {
    next(error);
  }
}
