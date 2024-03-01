//import axios from "axios";
const uploadFile = require("../../config/upload-file");

const Photo = require('../../models/photo')
const Clothing = require('../../models/clothing')

module.exports = {
    add,
    uploadPhoto
};
  
async function add(req, res) {
    req.body.user = req.user._id
    try {
        const clothing = await Clothing.create(req.body)
        res.json(clothing)
    } catch (error) {
        console.log(error);
    }
}

async function uploadPhoto(req, res) {
    console.log(req.file)
    try {
        if(req.file) {
            const photoUrl = await uploadFile(req.file)
            const photoDoc = await Photo.create({
                url: photoUrl
            })
            res.json(photoDoc)
        }
      } catch (error) {
        console.log("")
        console.error(error);
        //res.status(500).send('Error uploading file to S3');
      }
}