const mongoose = require('mongoose');
const Schema = mongoose.Schema

const calendarSchema = new Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true }
  }, {
      timestamps: true,
  });



  module.exports = mongoose.model('Calendar', calendarSchema)