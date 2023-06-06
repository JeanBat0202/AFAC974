const router = require("express").Router();
const artsRouter = require("./arts.routes");

router.use("/arts", artsRouter);

module.exports = router;
