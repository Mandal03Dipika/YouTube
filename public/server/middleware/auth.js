import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    let decodeData = jwt.verify(token, process.env.JWT_SECERT);
    req.userId = decodeData?.id;
    next();
  } catch (error) {
    return res.status(400).json("invalid credentials..");
  }
};

export default auth;
