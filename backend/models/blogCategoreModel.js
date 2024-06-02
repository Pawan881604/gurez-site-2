const mongoose = require("mongoose");

const blogCategoreSchema = new mongoose.Schema({
  blog_category_uuid: {
    type: String,
    default: null,
  },
  blog_category_title: {
    type: String,
    default: null,
  },
  blog_category_slug: {
    type: String,
    default: null,
  },
  blog_Parent_category: {
    type: String,
    default: null,
  },
  childs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blog_sub_categore",
    },
  ],
  blog_category_description: {
    type: String,
    default: null,
  },
  blog_thumbnail: {
    type: String,
    ref: "Images",
    default: null,
  },
  user: {
    type: Number,
    ref: "User",
  },
  blog_category_status: {
    type: String,
    default: "Active",
  },
  blog_category_is_deleted: {
    type: String,
    default: "No",
  },
  blog_category_is_updated: {
    type: Date,
    default: null,
  },
  blog_category_createdate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("blog_Categore", blogCategoreSchema);
