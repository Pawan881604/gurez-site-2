const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");
const seoModel = require("../models/seoModel");
const { url_formet } = require("../utils/url_formet");
const ApiFetures = require("../utils/apiFeatuers");

//------------------get all seo

exports.getAllSeo = catchAsyncError(async (req, res, next) => {
  const resultPerpage = 6;
  const apiFetures = new ApiFetures(seoModel.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerpage);
  const seo_data = await apiFetures.query;
  const seoReverse = seo_data.reverse();
  res.status(200).json({
    success: true,
    seo: seoReverse,
  });
});

exports.create_seo = catchAsyncError(async (req, res, next) => {
  const { seo_title, seo_slug, seo_decription, item_uuid, uuid, keywords } =
    req.body;
  const user = req.user._id;
  const url = await url_formet(seo_slug);
  const keyword = JSON.parse(keywords);
  const seo = await seoModel.create({
    seo_uuid: uuid,
    seo_title: seo_title,
    seo_keyword: keyword,
    seo_description: seo_decription,
    seo_link: url,
    item_uuid: item_uuid,
    user,
  });
  res.status(200).json({
    success: true,
  });
});

exports.update_seo = catchAsyncError(async (req, res, next) => {
  const { seo_title, seo_slug, seo_decription, product_uuid, uuid, keywords } =
    req.body;
  const user = req.user._id;
  const url = await url_formet(seo_slug);
  const keyword = JSON.parse(keywords);

  const data = {
    seo_uuid: uuid,
    seo_title: seo_title,
    seo_keyword: keyword,
    seo_description: seo_decription,
    seo_link: url,
    product_uuid: product_uuid,
    seo_is_updated: Date.now(),
    user
  };
  const is_exist = await seoModel.findOne({ seo_uuid: uuid });

  if (is_exist) {
    await seoModel.findByIdAndUpdate(is_exist._id, data, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
      overwrite: true,
    });
  }
  // const seo = await seoModel.create({
  //   seo_uuid: uuid,
  //   seo_title: seo_title,
  //   seo_keyword: keyword,
  //   seo_description: seo_decription,
  //   seo_link: url,
  //   product_uuid: product_uuid,
  //   user,
  // });
  res.status(200).json({
    success: true,
  });
});
