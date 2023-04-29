const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
email: {
type: String,
required: true,
unique: true
},
password: {
type: String,
required: true
},
vehicleInfo: {
type: String,
required: true
},
licenseInfo: {
type: String,
required: true
},
available: {
type: Boolean,
default: false
}
});

const Driver = mongoose.model('Driver', driverSchema);

driverSchema.statics.updateLocation = async function(id, location) {
    const driver = await this.findById(id);
    if (!driver) {
      throw new Error('Driver not found');
    }
    driver.location = location;
    await driver.save();
    return driver;
  }

module.exports = Driver;

