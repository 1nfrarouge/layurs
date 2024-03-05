// import axios from "axios";
const uploadFile = require("../../config/upload-file");
const getImages = require("../../config/get-images");

const Photo = require('../../models/photo')
const Clothing = require('../../models/clothing')


async function add(req, res) {
    req.body.user = req.user._id
    console.log('hello', req.body)
    try {
        const clothing = await Clothing.create(req.body)
        res.json(clothing)
    } catch (error) {
        console.log(error);
    }
}

async function getClothing(req, res) {

    try {
        const clothing = await Clothing.find({user: req.user._id})
        res.json(clothing)
        console.log("get clothing")
    } catch (error) {
        console.log("ERR")
        console.log("err" + error)
    }
}

async function uploadPhoto(req, res) {
    // console.log(req.file)
    try {
        if(req.file) {
            const photoUrl = await uploadFile(req.file)
            const photoDoc = await Photo.create({
                url: photoUrl
            })
            console.log('photoDoc', photoDoc)
            res.json(photoDoc)
        }
      } catch (error) {
        console.log("")
        console.error(error);
        //res.status(500).send('Error uploading file to S3');
      }
}

async function deletePhoto(req, res) {
    const clothing = await Clothing.findOneAndDelete(
        {_id: req.params.id, user: req.user._id}
    );
    res.json(clothing)
}

async function update(req, res) {
    try {
      const updatedClothing = await Clothing.findOneAndUpdate(
        {_id: req.params.id, user: req.user._id},
        // update object with updated properties
        req.body,
        // options object {new: true} returns updated doc
        {new: true}
      );
      res.json(updatedClothing)
    } catch (e) {
      console.log(e.message);
    }
  }

module.exports = {
    add,
    uploadPhoto,
    getClothing,
    deletePhoto,
    update
};
  