const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");
const seoModel = require("../models/seoModel");
const { url_formet } = require("../utils/url_formet");

//------------------get all seo

exports.getAllSeo = catchAsyncError(async (req, res, next) => {
  const seo = await seoModel.find();
  const seoReverse = seo.reverse();
  res.status(200).json({
    success: true,
    seo: seoReverse,
  });
});

exports.create_seo = catchAsyncError(async (req, res, next) => {
  const { seo_title, seo_slug, seo_decription, product_uuid, uuid, keywords } =
    req.body;
  console.log(req.body)
  const url = await url_formet(seo_slug);
  const keyword = JSON.parse(keywords);

//   const seo = await seoModel.create({
//     seo_uuid: uuid,
//     seo_title: seo_title,
//     seo_keyword: keyword,
//     seo_description: seo_decription,
//     seo_link: url,
//     product_uuid: product_uuid,
//   });
// console.log(seo)
  res.status(200).json({
    success: true,
  });
});
