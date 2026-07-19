import { Router } from 'express';
import {
  submitContact,
  getAllContacts,
  markAsRead,
  deleteContact,
} from '../controllers/contactController.js';

const router = Router();

router.post('/', submitContact);
router.get('/', getAllContacts);
router.patch('/:id/read', markAsRead);
router.delete('/:id', deleteContact);

export { router };
