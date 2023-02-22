const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const certificateSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    number: {
      type: String,
    },
    remarks: {
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
certificateSchema.plugin(toJSON);

/**
 * @typedef Certificate
 */
const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
