const mongoose = require("mongoose");

const seoSchema = new mongoose.Schema({
  seo_uuid: {
    type: String,
    default: null,
  },
  seo_title: {
    type: String,
    default: null,
  },
  seo_keyword: {
    type: [String],
    default: null,
  },
  seo_description: {
    type: String,
    default: null,
  },
  seo_link: {
    type: String,
    default: null,
  },
  product_uuid: {
    type: String,
    default: null,
  },

  seo_createdate: {
    type: Date,
    default: Date.now,
  },
  seo_is_updated: {
    type: Date,
    default: null,
  },
  seo_status: {
    type: String,
    default: "Active",
  },
  seo_is_deleted: {
    type: String,
    default: "No",
  },
  user: {
    type: Number,
    ref: "User",
  },
});

module.exports = mongoose.model("SEO", seoSchema);
