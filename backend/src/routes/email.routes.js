const router = require("express").Router();

const emailControllers = require("../controllers/emailControllers");
const AuthController = require("../controllers/AuthController");

router.post(
  "/send-mail-with-hbs",
  AuthController.isUserConnected,
  AuthController.isUserAllowedToGet,
  emailControllers.sendEmailWithHbsTemplate
);

module.exports = router;
