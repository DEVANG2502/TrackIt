import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
  fromLocation: {
    type: String,
    required: true,
  },
  toLocation: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  dimensions: {
    type: String,
    required: true,
  },
  additionalDetails: {
    type: String,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'in-transit', 'completed', 'cancelled'],
    default: 'pending',
  },
  vehicleNo: {
    type: String,
  },
  driverName: {
    type: String,
  },
  driverContact: {
    type: String,
  },
  location: {
    lat: { type: Number },
    lng: { type: Number },
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;