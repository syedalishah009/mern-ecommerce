const jwt = require("jsonwebtoken");

// this will verify the token that there is any token in header and then the token is same to token of the user request for any operation
const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader.split(" ")[1]; // take token from header, bearer 98dsfjdfljfd , after space take [1]
        jwt.verify(token, process.env.JWT_SEC, (err,user)=>{
            if (err) res.status(403).json("Token is not valid!");
            req.user = user // user comming in parameter from token
            next();
        })
    } else {
        return res.status(401).json("You are not authenticated!");
      }
}

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) { // req.user.id is user id in token
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };

  const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };

  module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  };