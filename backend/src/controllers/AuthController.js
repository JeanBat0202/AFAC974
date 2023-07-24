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

  static refreshToken = async (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.sendStatus(204);
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      return models.user.findById(decoded.id).then(([users]) => {
        if (users.length === 0) {
          return res.sendStatus(404);
        }

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
        return res
          .cookie("accessToken", refreshedToken, {
            httpOnly: true,
            secure: process.env.JWT_SECURE === "true",
            maxAge: parseInt(process.env.JWT_COOKIE_MAXAGE, 10),
          })
          .status(200)
          .json(userData);
      });
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };

  static deleteToken = async (req, res) => {
    const token = await req.cookies.accessToken;
    if (!token) {
      return res.sendStatus(204);
    }
    try {
      res.clearCookie("accessToken");
      return res.sendStatus(204);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };

  static isUserAdmin = async (req, res, next) => {
    const { id } = await req.decodedToken;
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

  static isUserAllowedToGet = async (req, res, next) => {
    const { id } = await req.decodedToken;

    const [checkUser] = await models.user
      .findById(id)
      .then((result) => result[0]);

    if (
      checkUser.name === "admin" ||
      parseInt(req.params.id, 10) === checkUser.id
    ) {
      return next();
    }
    return res.status(403).send("bite Vous ne pouvez pas faire ça !");
  };
}

module.exports = AuthController;
