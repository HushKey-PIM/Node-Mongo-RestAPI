const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const idCardSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    nameOn: {
      type: String,
    },
    expiry: {
      type: Date,
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
idCardSchema.plugin(toJSON);

/**
 * @typedef IdCard
 */
const IdCard = mongoose.model('IdCard', idCardSchema);

module.exports = IdCard;
