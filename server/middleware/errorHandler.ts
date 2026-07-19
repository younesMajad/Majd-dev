import type { Request, Response, NextFunction } from 'express';
import type { ApiResponse } from '../types/index.js';

/**
 * Global error handling middleware.
 * Catches all unhandled errors from controllers and returns a clean JSON response.
 */
export function errorHandler(
  err: Error,
  _req: Request,
  res: Response<ApiResponse<null>>,
  _next: NextFunction
): void {
  console.error('❌ Server Error:', err.message);

  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack);
  }

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
}
