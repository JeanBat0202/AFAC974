const router = require("express").Router();

const emailControllers = require("../controllers/emailControllers");
const AuthController = require("../controllers/AuthController");

router.post(
  "/send-mail-with-hbs",
  AuthController.isUserConnected,
  emailControllers.sendEmailWithHbsTemplate
);

module.exports = router;
