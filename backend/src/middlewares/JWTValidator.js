const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("../db");

const validateJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "You don't have permission for this operation. Contact to the admin",
    });
  }

  try {
    const { id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    
    // leer el usuario que corresponde al uid

    
    // leer el usuario que corresponde al id

    const user = await User.findByPk(id);
    

    if (!user) {
      return res.status(400).json({
        msg: "The user doesn't exist in our Database",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token is not valid",
    });
  }
};

module.exports = validateJWT;