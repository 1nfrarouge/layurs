// import axios from "axios";
const uploadFile = require("../../config/upload-file");
const getImages = require("../../config/get-images");

const Photo = require('../../models/photo')
const Clothing = require('../../models/clothing')


async function add(req, res) {
    req.body.user = req.user._id
    try {
        const clothing = await Clothing.create(req.body)
        res.json(clothing)
    } catch (error) {
        console.log(error);
    }
}

async function getClothing(req, res) {

    try {
        const clothing = await getImages.getAllImages()
        res.json(clothing)
        console.log("get clothing")
    } catch (error) {
        console.log("ERR")
        console.log("err" + error)
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

module.exports = {
    add,
    uploadPhoto,
    getClothing
};
  