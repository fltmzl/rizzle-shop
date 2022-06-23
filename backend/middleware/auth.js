import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const SECRET_KEY = process.env.SECRET_KEY;

  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

  // verify jwt token
  try {
    const verifiedUser = jwt.verify(token, SECRET_KEY);
    req.user = verifiedUser;
    next();
  } catch (error) {
    res.status(403).json({
      error: {
        code: 403,
        message: error.message,
        text: "Unauthorized",
      },
    });
  }
};

export const verifyTokenAndAuthorize = (req, res, next) => {
  verifyToken(req, res, () => {
    // if the ID of the currently logged in User
    // not same with the ID of the params URL
    // then prevent current User from modifying this user

    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(401).json({
        error: {
          code: 401,
          message: "You are not authorized to modify this user",
          text: "Unauthorized",
        },
      });
    }
  });
};
