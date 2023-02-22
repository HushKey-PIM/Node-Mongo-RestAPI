const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const membershipSchema = mongoose.Schema(
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
membershipSchema.plugin(toJSON);

/**
 * @typedef Membership
 */
const Membership = mongoose.model('Membership', membershipSchema);

module.exports = Membership;
