const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const ledgerSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    to: {
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
ledgerSchema.plugin(toJSON);

/**
 * @typedef Ledger
 */
const Ledger = mongoose.model('Ledger', ledgerSchema);

module.exports = Ledger;
