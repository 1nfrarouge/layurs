const { S3Client, ListObjectsV2Command } = require('@aws-sdk/client-s3');
// Ensure that the .env contains the following keys
const {S3_REGION, S3_BUCKET, S3_BASE_URL} = process.env;

console.log(S3_REGION)
// Examples:
// AWS_ACCESS_KEY_ID=AKIEZKKS2Z76VK45CAEK
// AWS_SECRET_ACCESS_KEY=Pgi7L0f6ODIadV0S2IiL8AU3frLvcUpNFIpH73GW
// S3_REGION=us-west-1
// S3_BUCKET=unique-bucket-name-for-photos
// S3_BASE_URL=https://s3-us-west-1.amazonaws.com/
// Note: The S3_BASE_URL specifies the endpoint used to download the file
// and should be stored in the MongoDB document along with the file's unique
// key appended to it, for example: https://s3-us-west-1.amazonaws.com/bucket-name/unique-file-key.png
// Note: The S3Client will automatically detect the AWS access key and secret environment variables

async function getAllImages() {
  try {
  // Create an instance of the S3 client
  const s3Client = new S3Client({ region: S3_REGION});
  // s3's PutObjectCommand will expect an object with the following properties
  const s3Params = {
    Bucket: S3_BUCKET
  };
  // Send the file to s3
  const command = new ListObjectsV2Command(s3Params);

  const response = await s3Client.send(command);
  //console.log(response.Contents);
  return response.Contents;

  // Return the endpoint to download the file
  //return `${S3_BASE_URL}${S3_BUCKET}/${s3Params.Key}`;
  }
  catch (err) {
    console.log(err)
  }
};

module.exports = {
    getAllImages
};