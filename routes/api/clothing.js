const express = require('express');
const router = express.Router();
const clothingCTRL = require('../../controllers/api/clothing');
const upload = require('multer')();

router.post('/', clothingCTRL.add)
router.post('/upload', upload.single('photo'), clothingCTRL.uploadPhoto)
router.get('/', clothingCTRL.getClothing)
router.delete('/:id', clothingCTRL.deletePhoto)
router.put('/:id', clothingCTRL.update)

module.exports = router;