const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const insuranceSchema = mongoose.Schema(
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
    issue: {
      type: String,
    },
    expiry: {
      type: String,
    },
    company: {
      type: String,
    },
    type: {
      type: String,
    },
    agentName: {
      type: String,
    },
    agentPhone: {
      type: String,
    },
    agentEmail: {
      type: String,
    },
    premium: {
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
insuranceSchema.plugin(toJSON);

/**
 * @typedef Insurance
 */
const Insurance = mongoose.model('Insurance', insuranceSchema);

module.exports = Insurance;
