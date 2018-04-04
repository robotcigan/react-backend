const mongoose = require('mongoose');
const Item = require('../models/item.model');

module.exports.findItems = () => {
  return Item.find()
}

// Item.find()
//   .then((items) => {
//     console.log(items);
//   })
//   .catch(err => {
//     console.log(err);
//   });