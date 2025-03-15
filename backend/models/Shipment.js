import mongoose from 'mongoose';

const shipmentSchema = new mongoose.Schema({
  truck: { type: mongoose.Schema.Types.ObjectId, ref: 'Truck' },
  goodsType: String,
  origin: String,
  destination: String,
  status: { type: String, enum: ['Pending', 'In Transit', 'Delivered'], default: 'Pending' },
  location: String,
});

export default mongoose.model('Shipment', shipmentSchema);
