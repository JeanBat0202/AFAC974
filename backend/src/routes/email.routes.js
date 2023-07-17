const router = require("express").Router();

const emailControllers = require("../controllers/emailControllers");

router.post("/send-mail-with-hbs", emailControllers.sendEmailWithHbsTemplate);

module.exports = router;
