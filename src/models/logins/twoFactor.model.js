const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const twoFactorSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    secret: {
      type: String,
    },
    additional: {
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
twoFactorSchema.plugin(toJSON);

/**
 * @typedef TwoFactor
 */
const TwoFactor = mongoose.model('TwoFactor', twoFactorSchema);

module.exports = TwoFactor;
