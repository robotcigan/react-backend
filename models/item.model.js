const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  name: String
})

let Item = mongoose.model('Item', itemSchema);

module.exports = Item;