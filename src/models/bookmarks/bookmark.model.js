const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const bookmarkSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    url: {
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
bookmarkSchema.plugin(toJSON);

/**
 * @typedef Bookmark
 */
const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;
