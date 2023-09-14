const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/UserSchema");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    try {
      //get the token
    //   console.log("got in if statement");
      token = req.headers.authorization.split(" ")[1];
    //   console.log("got the token: " + token);


      //verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //   console.log("token verified: " + decoded);


      //get user from token
      req.user = await User.findOne({_id:decoded.id}).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized to access");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized to access no token");
  }
});

module.exports = { protect };
