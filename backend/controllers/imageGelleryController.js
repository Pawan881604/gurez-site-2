const uploadFile = require("../middleware/aws-multerS3");
const catchAsyncError = require("../middleware/catchAsyncError");
const countModel = require("../models/CountModel");
const imageGelleryModel = require("../models/imageGelleryModel");
const ApiFetures = require("../utils/apiFeatuers");
const ErrorHandler = require("../utils/errorhandler");
const fs = require("fs");
const path = require("path");
const { S3Client, ListObjectsV2Command } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
const params = {
  Bucket: process.env.S3_BUCKET_NAME,
};
exports.getAllImages = catchAsyncError(async (req, res, next) => {
  const resultPerpage = 20;
  // let images;

  const command = new ListObjectsV2Command(params);
  const { Contents } = await s3Client.send(command);

  const imageUrls = Contents.map((object) => {
    const data = {
      id: object.ETag,
      LastModified: object.LastModified,
      url: `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${object.Key}`,
    };
    return data;
  });

  const imageCount = imageUrls && imageUrls.length;

  const page = parseInt(req.query.page) || 1;
  const startIndex = (page - 1) * resultPerpage;
  const endIndex = startIndex + resultPerpage;
  images = imageUrls.slice(startIndex, endIndex);

  res.status(200).json({
    success: true,
    images,
    imageCount,
    resultPerpage,
  });
});

//----------- create image createImageGellery

exports.createImageGellery = catchAsyncError(async (req, res, next) => {
  const { userid } = req.body;

  const productCounter = await countModel.findOne({ entityName: "User" });
  const images = [];
  const files = req.files;
  const uploadPromises = files.map((file) =>
    uploadFile(
      path.resolve(file.path),
      process.env.S3_BUCKET_NAME,
      file.originalname
    )
  );
  await Promise.all(uploadPromises);
  const avatarPath = req.files;

  avatarPath.forEach((item, i) => {
    images.push({
      fieldname: item.fieldname,
      originalname: item.originalname,
      encoding: item.encoding,
      mimetype: item.mimetype,
      destination: item.destination,
      filename: item.filename,
      path: item.path,
      size: item.size,
      productId: userid,
    });
  });

  const imagesGellery = await imageGelleryModel.create(images);
  files.forEach((file) => fs.unlinkSync(file.path));

  res.status(201).json({
    success: true,
    imagesGellery,
  });
});

//update --image seo

exports.updateImageSeo = catchAsyncError(async (req, res, next) => {
  res.status(201).json({
    success: true,
  });
});

exports.getImageFromIds = catchAsyncError(async (req, res, next) => {
  const { ids } = req.body;

  // const image = await imageGelleryModel.find({ _id: { $in: ids } });
  const command = new ListObjectsV2Command(params);
  const { Contents } = await s3Client.send(command);

  const imageUrls = Contents.map((object) => {
    const data = {
      id: object.ETag,
      LastModified: object.LastModified,
      url: `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${object.Key}`,
    };
    return data;
  });

  let filter_image = imageUrls.filter((item, i) => item.id === ids[i]);

  res.status(200).json({
    success: true,
    image: filter_image,
  });
});
