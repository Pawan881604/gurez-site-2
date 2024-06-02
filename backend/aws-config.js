const { S3Client } = require("@aws-sdk/client-s3");
const { fromIni } = require("@aws-sdk/credential-provider-ini");


const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: fromIni({ profile: process.env.S3_BUCKET_NAME }),
});

module.exports = s3Client;
