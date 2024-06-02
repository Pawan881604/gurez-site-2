const mongoose = require("mongoose");
const CountModel = require("./CountModel");

const blogPostSchema = new mongoose.Schema({
  postid: Number,
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
      ref: "Categore",
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
  },
  blog_featureimage: {
    type: String,
  },
  user: {
    type: Number,
    ref: "User",
    required: true,
  },
  blog_createdate: {
    type: Date,
    default: Date.now(),
  },
  blog_is_status: {
    type: String,
    default: "Draft",
  },
  blog_is_deleted: {
    type: String,
    default: "No",
  },
});
blogPostSchema.pre("save", async function (next) {
  if (!this.isNew) {
    return next();
  }
  try {
    const counter = await CountModel.findOneAndUpdate(
      { entityName: "User" },
      { $inc: { blogpost: 1 } },
      { new: true, upsert: true }
    );
    this.postid = counter.blogpost;
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
});
module.exports = mongoose.model("blogPost", blogPostSchema);
