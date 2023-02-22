const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const wifiSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    ssid: {
      type: String,
    },
    password: {
      type: String,
    },
    accountUsername: {
      type: String,
    },
    accountPassword: {
      type: String,
    },
    ip: {
      type: String,
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
wifiSchema.plugin(toJSON);

/**
 * @typedef Wifi
 */
const Wifi = mongoose.model('Wifi', wifiSchema);

module.exports = Wifi;
