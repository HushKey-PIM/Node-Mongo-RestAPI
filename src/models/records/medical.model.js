const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const medicalSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    date: {
      type: String,
    },
    place: {
      type: String,
    },
    remarks: {
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
medicalSchema.plugin(toJSON);

/**
 * @typedef Medical
 */
const Medical = mongoose.model('Medical', medicalSchema);

module.exports = Medical;
