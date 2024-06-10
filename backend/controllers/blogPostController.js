const catchAsyncError = require("../middleware/catchAsyncError");
const mongoose = require("mongoose");
const CountModel = require("../models/CountModel");
const blogPost = require("../models/blogPostModel");
const ErrorHandler = require("../utils/errorhandler");
const seoModel = require("../models/seoModel");
const ApiFetures = require("../utils/apiFeatuers");
const { url_formet } = require("../utils/url_formet");
const { generateUniqueUrl } = require("../utils/generate_Unique_Url");

//-------------- get all post
exports.getAllBlogPost = catchAsyncError(async (req, res, next) => {
  const resultPerpage = 12;
  const blogPostCount = await blogPost.find().countDocuments();
  const apiFetures = new ApiFetures(blogPost.find(), req.query)
    .search()
    .pagination(resultPerpage);

  const blog = await apiFetures.query
    .populate([
      { path: "category", model: "blogCategore" },
      { path: "user", model: "User" },
      { path: "seo", model: "SEO" },
    ])
    .exec();

  const reverseBlog = blog.reverse();
  res.status(200).json({
    success: true,
    blog: reverseBlog,
    resultPerpage,
    blogPostCount,
  });
});

exports.filterblogpost = catchAsyncError(async (req, res, next) => {
  // const blog = await blogPost.find().populate([
  //   { path: "category", model: "blogCategore" },
  //   { path: "user", model: "User" },
  //   { path: "seo", model: "SEO" },
  // ]);

  // const reverseBlog = blog.reverse();

  const resultPerpage = 12;
  // const blog = await blogPost.countDocuments();
  // const filterProduct = await toggleModel.find();
  const newProducts = [];
  const apiFetures = new ApiFetures(blogPost.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerpage);

  const blog = await apiFetures.query.populate([
    { path: "category", model: "blogCategore" },
    { path: "user", model: "User" },
    { path: "seo", model: "SEO" },
  ]);

  // .populate([
  //   { path: "category", model: "Categore" },
  //   { path: "subcategory", model: "SubCategore" },
  //   { path: "imageId", model: "Images" },
  //   { path: "reviewsids", model: "reviewsSchema" },
  //   { path: "seoid", model: "SEO" },
  // ])
  // .exec();

  res.status(200).json({
    success: true,
    blog,
  });
});
//------ create blog post -- admin

exports.createBlogPost = catchAsyncError(async (req, res, next) => {
  const {
    title,
    description,
    slug,
    blog_uuid,
    image_url,
    subcategory,
    category,
  } = req.body;
  const user = req.user._id;

  const uniqe_url = await generateUniqueUrl(slug, blogPost, "blog_slug");
  console.log(uniqe_url);
  function flattenArray(array) {
    return array.reduce((acc, curr) => {
      return Array.isArray(curr)
        ? [...acc, ...flattenArray(curr)]
        : [...acc, curr];
    }, []);
  }

  const flattened_category =
    Array.isArray(category) && category.length > 0
      ? flattenArray(category)
      : category;

  const flattened_subcategory =
    Array.isArray(subcategory) && subcategory.length > 0
      ? flattenArray(subcategory)
      : subcategory;
  const blog_length = await blogPost.countDocuments();

  const blog = await blogPost.create({
    postid: blog_length + 1,
    blog_title: title,
    blog_content: description,
    blog_category: flattened_category,
    blog_subcategory: flattened_subcategory,
    blog_slug: uniqe_url,
    blog_featureimage: image_url,
    blog_uuid,
    user,
  });
  res.status(201).json({
    success: true,
    blog,
  });
});

//--------------------- update post -- admin

exports.updateBlogPost = catchAsyncError(async (req, res, next) => {
  const {
    title,
    description,
    category,
    slug,
    seotitle,
    keyword,
    metadec,
    metalink,
  } = req.body;
  const { id } = req.params;
  const url = slug.split(" ").join("-").toLowerCase();
  const data = {
    title,
    article: description,
    slug: url,
    category: category,
  };
  const seoData = {
    metatitle: seotitle,
    keyword: keyword,
    metadec: metadec,
    metalink: metalink,
  };

  const existingPost = await blogPost.findOne({ postid: id });

  if (!existingPost) {
    return next(new ErrorHandler("Post not found", 404));
  }

  const updatedPost = await blogPost.findByIdAndUpdate(existingPost._id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  const seo = await seoModel.findById(existingPost.seo);

  if (!seo) {
    return next(new ErrorHandler("Post not found", 404));
  }

  const updatedPostSeo = await seoModel.findOneAndUpdate(
    { _id: seo._id },
    seoData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    blog: updatedPost,
    seo: updatedPostSeo,
  });
});

//----------------------- delete post -- admin

exports.deleteBlogPost = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return next(new ErrorHandler("Invalid ID format", 400));
  // }

  const existingPost = await blogPost.findOne({ postid: id });
  const existingPostSeo = await seoModel.findOne({ _id: existingPost.seo });

  if (!existingPost) {
    return next(new ErrorHandler("Post not found", 404));
  }
  if (!existingPostSeo) {
    return next(new ErrorHandler("Post not found", 404));
  }

  await existingPostSeo.deleteOne();
  await existingPost.deleteOne();
  res.status(200).json({
    success: true,
    message: "post has been deleted",
  });
});

//------------- get single post

exports.singleBlogPost = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  let blog;
  if (isNaN(req.params.id)) {
    blog = await blogPost.findOne({ slug: id }).populate([
      { path: "category", model: "blogCategore" },
      { path: "user", model: "User" },
      { path: "seo", model: "SEO" },
    ]);
  } else {
    blog = await blogPost.findOne({ postid: id }).populate([
      { path: "category", model: "blogCategore" },
      { path: "user", model: "User" },
      { path: "seo", model: "SEO" },
    ]);
  }

  if (!blog) {
    return next(new ErrorHandler("Post not found", 404));
  }

  res.status(200).json({
    success: true,
    blog,
  });
});
