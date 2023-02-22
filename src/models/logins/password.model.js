const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const passwordSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    link: {
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
passwordSchema.plugin(toJSON);

/**
 * @typedef Password
 */
const Password = mongoose.model('Password', passwordSchema);

module.exports = Password;
