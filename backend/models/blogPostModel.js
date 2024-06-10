const mongoose = require("mongoose");
const CountModel = require("./CountModel");

const blogPostSchema = new mongoose.Schema({
  blog_uuid: {
    type: String,
    default: null,
  },
  postid: { type: Number, default: null },
  blog_title: {
    type: String,
    default: null,
  },
  blog_content: {
    type: String,
    default: null,
  },
  blog_category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blog_Categore",
    },
  ],
  blog_subcategory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blog_sub_categore",
    },
  ],
  blog_tegs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog_tags",
    },
  ],
  blog_slug: {
    type: String,
    default: null,
  },
  blog_featureimage: {
    type: String,
    default: null,
  },
  user: {
    type: Number,
    ref: "User",
  },
  blog_createdate: {
    type: Date,
    default: Date.now(),
  },
  blog_is_updated: {
    type: Date,
    default: null,
  },
  blog_is_status: {
    type: String,
    default: "Active",
  },
  blog_is_deleted: {
    type: String,
    default: "No",
  },
});

module.exports = mongoose.model("blogPost", blogPostSchema);
