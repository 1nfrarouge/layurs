const express = require('express');
const router = express.Router();
const clothingCTRL = require('../../controllers/api/clothing');
const upload = require('multer')();

router.post('/', clothingCTRL.add)
router.post('/upload', upload.single('photo'), clothingCTRL.uploadPhoto)

// const multer = require('multer');

// const storage = multer.memoryStorage();
// const fileFilter = (req, file, cb) => {
//     // Allow only image files
//     if (file.mimetype.startsWith('image/')) {
//       cb(null, true);
//     } else {
//       cb(new Error('Invalid file type'), false);
//     }
// };

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 1024 * 1024 * 5 },
//     fileFilter: fileFilter
//   });

// const photoUpload = require('../../controllers/api/clothing');

// // All paths start with '/api/users'

// // POST /api/photos
// router.post('/upload', upload.single('file'), async (req, res) => {
//     // File upload handling and S3 upload logic goes here
//     const file = req.file;

//     const params = {
//         Bucket: process.env.AWS_S3_BUCKET_NAME,
//         Key: file.originalname,
//         Body: file.buffer,
//         ContentType: file.mimetype
//     };
//     photoUpload.uploadPhoto(params)

// });


module.exports = router;