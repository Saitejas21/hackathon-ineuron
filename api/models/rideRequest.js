const mongoose = require('mongoose');

const rideRequestSchema = new mongoose.Schema({
startLocation: {
type: {
type: String,
default: 'Point'
},
coordinates: {
type: [Number],
required: true
}
},
endLocation: {
type: {
type: String,
default: 'Point'
},
coordinates: {
type: [Number],
required: true
}
},
passengerCount: {
type: Number,
required: true
},
driver: {
type: mongoose.Schema.Types.ObjectId,
ref: 'Driver'
},
status: {
type: String,
enum: ['pending', 'matched', 'completed'],
default: 'pending'
}
});

rideRequestSchema.index({ startLocation: '2dsphere' });

rideRequestSchema.statics.updateStatus = async function(id, status) {
    const rideRequest = await this.findById(id);
    if (!rideRequest) {
      throw new Error('Ride request not found');
    }
    rideRequest.status = status;
    await rideRequest.save();
    return rideRequest;
  }

const RideRequest = mongoose.model('RideRequest', rideRequestSchema);

module.exports = RideRequest;