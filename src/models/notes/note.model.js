const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const noteSchema = mongoose.Schema(
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
    note: {
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
noteSchema.plugin(toJSON);

/**
 * @typedef note
 */
const note = mongoose.model('note', noteSchema);

module.exports = note;
