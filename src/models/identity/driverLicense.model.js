const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const driverLicenseSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    number: {
      type: String,
    },
    issue: {
      type: Date,
    },
    expiry: {
      type: Date,
    },
    folder: {
      type: String,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
driverLicenseSchema.plugin(toJSON);

/**
 * @typedef DriverLicense
 */
const DriverLicense = mongoose.model('DriverLicense', driverLicenseSchema);

module.exports = DriverLicense;
