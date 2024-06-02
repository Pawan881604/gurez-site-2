const mongoose = require("mongoose");

const blog_tags_schema = new mongoose.Schema({
  tag_uuid: {
    type: String,
    default: null,
  },
  tag_slug: {
    type: String,
    default: null,
  },
  tag_name: {
    type: String,
    default: null,
  },
  user: {
    type: Number,
    ref: "User",
  },
  tag_create_date: {
    type: Date,
    default: Date.now(),
  },
  tag_is_status: {
    type: String,
    default: "Draft",
  },
  tag_is_deleted: {
    type: String,
    default: "No",
  },
});

module.exports = mongoose.model("Blog_tags", blog_tags_schema);
