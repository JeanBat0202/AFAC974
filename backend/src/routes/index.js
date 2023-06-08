const router = require("express").Router();
const artsRouter = require("./arts.routes");
const authorsRouter = require("./authors.routes");
const userRouter = require("./users.routes");
const artTypesRouter = require("./artTypes.routes");

router.use("/arts", artsRouter);
router.use("/authors", authorsRouter);
router.use("/users", userRouter);
router.use("/artTypes", artTypesRouter);

module.exports = router;
