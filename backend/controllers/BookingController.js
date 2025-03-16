import Booking from '../models/Booking.js';

// Create Booking
export const createBooking = async (req, res) => {
  try {
    const {
      serviceType,
      fromLocation,
      toLocation,
      weight,
      dimensions,
      additionalDetails,
    } = req.body;

    const booking = await Booking.create({
      userId: req.user._id, // Access user ID from req.user
      serviceType,
      fromLocation,
      toLocation,
      weight,
      dimensions,
      additionalDetails,
    });

    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    console.error('Create Booking Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// ... other controller methods ...
// Get All Bookings for User
export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id });
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Get Bookings Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update Booking (Admin Only)
export const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error('Update Booking Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete Booking (Admin Only)
export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Delete Booking Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};