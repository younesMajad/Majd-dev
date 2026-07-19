import type { Request, Response, NextFunction } from 'express';

/**
 * Factory: creates a middleware that validates required body fields exist.
 * 
 * Usage:
 *   router.post('/', validateRequest(['name', 'email', 'message']), submitContact);
 */
export function validateRequest(requiredFields: string[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const missingFields: string[] = [];

    for (const field of requiredFields) {
      if (req.body[field] === undefined || req.body[field] === null || req.body[field] === '') {
        missingFields.push(field);
      }
    }

    if (missingFields.length > 0) {
      res.status(400).json({
        success: false,
        error: `Missing required fields: ${missingFields.join(', ')}`,
      });
      return;
    }

    next();
  };
}
