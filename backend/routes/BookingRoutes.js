import express from 'express';
import {
  createBooking,
  getMyBookings,
  updateBooking,
  deleteBooking,
} from '../controllers/BookingController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect); // Ensure all routes are protected

router.route('/').post(createBooking).get(getMyBookings);
router.route('/:id').put(updateBooking).delete(deleteBooking);

export default router;