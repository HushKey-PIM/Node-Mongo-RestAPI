const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const bankAccountSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    holder: {
      type: String,
    },
    number: {
      type: String,
    },
    ifsc: {
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
bankAccountSchema.plugin(toJSON);

/**
 * @typedef BankAccount
 */
const BankAccount = mongoose.model('BankAccount', bankAccountSchema);

module.exports = BankAccount;
