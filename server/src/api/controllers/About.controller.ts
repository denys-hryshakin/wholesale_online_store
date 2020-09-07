export {};
const About = require("../models/About.model");

const statusOK = 200;
const statusError = 500;
const messageOK = "OK";
const messageError = "Internal Server Error!";

exports.findAll = async (req: any, res: any) => {
  try {
    let data = await About.find();
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
