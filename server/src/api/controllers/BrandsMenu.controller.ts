export {};
const BrandsMenu = require("../models/BrandsMenu.model");
require("dotenv").config();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

// CONSTANTS For Response
const statusOK = 200;
const statusError = 500;
const messageOK = "OK";
const messageError = "Internal Server Error!";

// MULTER
const storage = multer.diskStorage({
  destination: function (
    req: any,
    file: any,
    cb: (arg0: any, arg1: string) => void
  ) {
    cb(null, "uploads/");
  },
  filename: function (
    req: any,
    file: { originalname: any },
    cb: (arg0: any, arg1: any) => void
  ) {
    console.log(file);
    cb(null, file.originalname);
  },
});

exports.addItem = (req: any, res: any, next: any) => {
  const upload = multer({ storage }).single("name-of-input-key");
  upload(req, res, function (err: any) {
    if (err) {
      return res.send(err);
    }
    console.log("file uploaded to server");
    console.log(req.file);

    // SEND FILE TO CLOUDINARY
    cloudinary.config({
      cloud_name: "inspirer21",
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const path = req.file.path;
    const uniqueFilename = new Date().toISOString();

    cloudinary.uploader.upload(
      path,
      { public_id: `brandsMenu/${uniqueFilename}`, tags: `brandsMenu` }, // directory and tags are optional
      function (err: any, image: any) {
        if (err) return res.send(err);
        console.log("file uploaded to Cloudinary");
        // remove file from server
        const fs = require("fs");
        fs.unlinkSync(path);
        // return image details
        res.json(image);
        BrandsMenu.find({});
        const newItem = new BrandsMenu({
          name: req.body.name,
          image: image.secure_url,
          imageId: image.public_id,
        });
        newItem.save();
      }
    );
  });
};

exports.findAll = async (req: any, res: any) => {
  try {
    let data = await BrandsMenu.find();
    res.status(statusOK).json({
      method: "GET",
      status: statusOK,
      message: messageOK,
      items: data,
    });
  } catch (error) {
    res.status(statusError).json({
      status: statusError,
      message: messageError,
      error: error,
    });
  }
};
