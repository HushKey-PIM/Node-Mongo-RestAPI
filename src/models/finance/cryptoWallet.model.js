const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const cryptoWalletSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    publicKey: {
      type: String,
    },
    privateKey: {
      type: String,
    },
    ens: {
      type: String,
    },
    secret: {
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
cryptoWalletSchema.plugin(toJSON);

/**
 * @typedef CryptoWallet
 */
const CryptoWallet = mongoose.model('CryptoWallet', cryptoWalletSchema);

module.exports = CryptoWallet;
