const router = require("express").Router();
const artsRouter = require("./arts.routes");
const authorsRouter = require("./authors.routes");

router.use("/arts", artsRouter);
router.use("/authors", authorsRouter);

module.exports = router;
