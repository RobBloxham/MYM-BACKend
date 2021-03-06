const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, default: "0", required: true },
    category: { type: String, required: true, default: '1' },
    countInStock: { type: Number, default: 0, required: true },
    description: { type: String, required: true },
  }, {
      timestamps: true,
  });


const storeSchema = new Schema({
    storePicture: String,
    storeName: String,
    storeLocation: String,
    bio: String,
    createdBy: {type:Schema.Types.ObjectId, ref:'User'}, 
    products: [productSchema]
  }, {
      timestamps: true,
  });

  module.exports = mongoose.model('Store', storeSchema)