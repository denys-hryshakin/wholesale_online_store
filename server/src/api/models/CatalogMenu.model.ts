export {};
const mongoose = require("mongoose");

const CatalogSubMenuSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  subName: { type: String },
  image: { type: String, default: "" },
});

const CatalogMenuSchema = mongoose.Schema({
  name: { type: String },
  isSubMenu: { type: Boolean },
  subMenu: [CatalogSubMenuSchema],
});

module.exports = mongoose.model(
  "CatalogMenu",
  CatalogMenuSchema,
  "catalogMenu"
);
