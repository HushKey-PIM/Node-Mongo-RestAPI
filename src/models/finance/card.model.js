const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const cardSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    number: {
      type: String,
    },
    expiry: {
      type: String,
    },
    cvv: {
      type: String,
    },
    pin: {
      type: String,
    },
    type: {
      type: String,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    additional: {
      type: String,
    },
    color: {
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
cardSchema.plugin(toJSON);

/**
 * @typedef Card
 */
const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
