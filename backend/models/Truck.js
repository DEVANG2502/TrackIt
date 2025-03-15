import mongoose from 'mongoose';

const truckSchema = new mongoose.Schema({
  model: String,
  number: String,
  capacity: String,
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('Truck', truckSchema);
