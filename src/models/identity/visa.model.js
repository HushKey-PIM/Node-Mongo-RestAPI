const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const visaSchema = mongoose.Schema(
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
    place: {
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
visaSchema.plugin(toJSON);

/**
 * @typedef Visa
 */
const Visa = mongoose.model('Visa', visaSchema);

module.exports = Visa;
