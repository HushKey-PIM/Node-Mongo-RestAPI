const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const documentSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    file: {
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
documentSchema.plugin(toJSON);

/**
 * @typedef Document
 */
const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
