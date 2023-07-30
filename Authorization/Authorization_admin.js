const customError = require("../helper/customError");

const util = require("util");

const jwt = require("jsonwebtoken");

const asyncverify = util.promisify(jwt.verify);

require("dotenv").config();

const secrtkey = "hahaha";

//--------------------------------------------------------------

const admin = async (req, res, next) => {

const { authorization: token } = req.headers;

let decoded = await asyncverify(token, secrtkey);
console.log(decoded);
if (decoded.isAdmin !== "admin") {

 next(

    customError({

    stateCod: 401,

     message: "Not an admin or the id does not match",

    })

 );

 }

next();

};
module.exports = admin;

 