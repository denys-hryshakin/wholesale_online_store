export {};
const mongoose = require("mongoose");

const BrandsMenuSchema = mongoose.Schema({
  name: { type: String },
  image: { type: String },
  imageId: { type: String },
});

module.exports = mongoose.model("BrandsMenu", BrandsMenuSchema, "brandsMenu");
