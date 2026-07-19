import type { Request, Response, NextFunction } from 'express';
import { ContactModel } from '../models/Contact.js';
import type { ApiResponse, ContactSubmission } from '../types/index.js';

/**
 * POST /api/contact
 * Submit a new contact form message.
 */
export async function submitContact(
  req: Request,
  res: Response<ApiResponse<ContactSubmission>>,
  next: NextFunction
): Promise<void> {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({
        success: false,
        error: 'All fields (name, email, message) are required',
      });
      return;
    }

    const submission: ContactSubmission = {
      id: crypto.randomUUID(),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
      read: false,
    };

    const created = await ContactModel.create(submission);
    res.status(201).json({
      success: true,
      data: created,
      message: 'Message received successfully',
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/contact
 * Retrieve all contact submissions (admin use).
 */
export async function getAllContacts(
  _req: Request,
  res: Response<ApiResponse<ContactSubmission[]>>,
  next: NextFunction
): Promise<void> {
  try {
    const contacts = await ContactModel.getAll();
    res.json({ success: true, data: contacts });
  } catch (error) {
    next(error);
  }
}

/**
 * PATCH /api/contact/:id/read
 * Mark a contact submission as read.
 */
export async function markAsRead(
  req: Request<{ id: string }>,
  res: Response<ApiResponse<ContactSubmission>>,
  next: NextFunction
): Promise<void> {
  try {
    const updated = await ContactModel.update(req.params.id, { read: true });
    if (!updated) {
      res.status(404).json({ success: false, error: 'Contact not found' });
      return;
    }
    res.json({ success: true, data: updated });
  } catch (error) {
    next(error);
  }
}

/**
 * DELETE /api/contact/:id
 * Delete a contact submission.
 */
export async function deleteContact(
  req: Request<{ id: string }>,
  res: Response<ApiResponse<null>>,
  next: NextFunction
): Promise<void> {
  try {
    const deleted = await ContactModel.delete(req.params.id);
    if (!deleted) {
      res.status(404).json({ success: false, error: 'Contact not found' });
      return;
    }
    res.json({ success: true, message: 'Contact deleted' });
  } catch (error) {
    next(error);
  }
}
