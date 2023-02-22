const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const taxSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    number: {
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
taxSchema.plugin(toJSON);

/**
 * @typedef Tax
 */
const Tax = mongoose.model('Tax', taxSchema);

module.exports = Tax;
