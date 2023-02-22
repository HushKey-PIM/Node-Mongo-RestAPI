const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const passportSchema = mongoose.Schema(
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
passportSchema.plugin(toJSON);

/**
 * @typedef Passport
 */
const Passport = mongoose.model('Passport', passportSchema);

module.exports = Passport;
