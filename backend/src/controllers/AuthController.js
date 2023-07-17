const jwt = require("jsonwebtoken");
const models = require("../models");

class AuthController {
  static isUserConnected = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.status(401).send("Vous n'etes pas connecter !");
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.decodedToken = decoded;
      return next();
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };

  static isUserAllowedToGet = (req, res, next) => {
    if (
      req.decodedToken.name === "admin" ||
      parseInt(req.params.id, 10) === req.decodedToken.id
    ) {
      return next();
    }
    return res.status(403).send("Vous ne pouvez pas faire ça !");
  };

  static isUserAdmin = async (req, res, next) => {
    const { id } = req.decodedToken;

    const [checkUser] = await models.user
      .findById(id)
      .then((result) => result[0]);

    if (!checkUser) {
      return res
        .status(404)
        .send("Certaines données de votre compte n'exsiste pas !");
    }
    if (checkUser.name !== "admin") {
      return res.status(403).send("Vous ne pouvez pas faire ça !");
    }
    return next();
  };

  static refreshToken = async (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) {
      res.sendStatus(204);
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      models.user.findById(decoded.id).then(([users]) => {
        if (users.length === 0) {
          res.sendStatus(404);
        } else {
          const userData = { ...users[0] };
          const refreshedToken = jwt.sign(
            {
              id: userData.id,
              role: userData.role,
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRESIN }
          );
          delete userData.hashedPassword;
          res
            .cookie("accessToken", refreshedToken, {
              httpOnly: true,
              secure: process.env.JWT_SECURE === "true",
              maxAge: parseInt(process.env.JWT_COOKIE_MAXAGE, 10),
            })
            .status(200)
            .json(userData);
        }
      });
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
}

module.exports = AuthController;
