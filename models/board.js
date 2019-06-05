const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  title: {type: String, required: true},
  created_at: Date,
  updated_at: Date,
  _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  _lists: [{type: mongoose.Schema.Types.ObjectId, ref: 'List', required: true}]
})

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;