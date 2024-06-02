const catchAsyncError = require("../middleware/catchAsyncError");
const blogCategoreModel = require("../models/blogCategoreModel");
const mongoose = require("mongoose");
const ErrorHandler = require("../utils/errorhandler");
const { url_formet } = require("../utils/url_formet");
const blog_sub_categore_model = require("../models/blog_sub_categore_model");

exports.getAllBlogCategores = catchAsyncError(async (req, res, next) => {
  const allCategores = await blogCategoreModel.find().populate([
    { path: "user", model: "User" },
    { path: "blog_thumbnail", model: "Images" },
  ]);
  res.status(200).json({
    success: true,
    allCategores,
  });
});
exports.get_all_blog_sub_categores = catchAsyncError(async (req, res, next) => {
  const blog_sub_categores = await blog_sub_categore_model.find().populate([
    { path: "user", model: "User" },
    { path: "blog_thumbnail", model: "Images" },
  ]);
  res.status(200).json({
    success: true,
    blog_sub_categores,
  });
});

exports.createBlogCategore = catchAsyncError(async (req, res, next) => {
  const { Title, slug, Parent_category, description, uuid, img_id } = req.body;
  const url = await url_formet(slug);
  const user = req.user.id;
  const existingSlug = await blogCategoreModel.findOne({
    blog_category_slug: url,
  });
  if (existingSlug) {
    return next(
      new ErrorHandler(
        `Slug already exists. Please choose a different one.`,
        409
      )
    );
  }

  const newCategorie = await blogCategoreModel.create({
    blog_category_title: Title,
    blog_category_slug: url,
    blog_category_description: description,
    blog_Parent_category: Parent_category,
    blog_category_uuid: uuid,
    user,
  });

  if (img_id !== "null") {
    newCategorie.blog_thumbnail = img_id;
    await newCategorie.save();
  }

  const all_post_Categores = await blogCategoreModel
    .find()
    .populate([{ path: "blog_thumbnail", model: "Images" }]);

  res.status(201).json({
    success: true,
    all_post_Categores,
  });
});

exports.create_blog_sub_categore = catchAsyncError(async (req, res, next) => {
  const { Title, slug, Parent_category, description, uuid, img_id } = req.body;
  const url = await url_formet(slug);
  const user = req.user.id;

  const existingSlug = await blog_sub_categore_model.findOne({ slug: url });

  if (existingSlug) {
    return next(
      new ErrorHandler(
        `Slug already exists. Please choose a different one.`,
        409
      )
    );
  }
  const newCategorie = await blog_sub_categore_model.create({
    blog_category_title: Title,
    blog_category_slug: url,
    blog_category_description: description,
    blog_Parent_category: Parent_category,
    blog_category_uuid: uuid,
    user,
  });
  if (img_id !== "null") {
    newCategorie.blog_thumbnail = img_id;
    await newCategorie.save();
  }
  const all_blog_sub_categores = await blog_sub_categore_model.find().populate([
    { path: "user", model: "User" },
    { path: "blog_thumbnail", model: "Images" },
  ]);

  res.status(201).json({
    success: true,
    all_blog_sub_categores,
  });
});

exports.deleteBlogCategore = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ErrorHandler("Invalid ID format", 400));
  }

  const existingPost = await blogCategoreModel.findById(id);

  if (!existingPost) {
    return next(new ErrorHandler("Post not found", 404));
  }

  await existingPost.deleteOne();
  res.status(200).json({
    success: true,
    message: "post has been deleted",
  });
});

exports.updateBlogCategore = catchAsyncError(async (req, res, next) => {
  const { name, slug, title, description } = req.body;
  let metaLink = slug.split(" ").join("-").toLowerCase();
  const user = req.user._id;
  const { id } = req.params;

  const data = {
    name,
    slug: metaLink,
    title,
    description,
    user,
  };

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ErrorHandler("Invalid ID format", 400));
  }

  const updatedCategory = await blogCategoreModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    updatedCategory,
  });
});
