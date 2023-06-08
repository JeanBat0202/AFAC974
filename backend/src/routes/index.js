const router = require("express").Router();
const artsRouter = require("./arts.routes");
const authorsRouter = require("./authors.routes");
const userRouter = require("./users.routes");

router.use("/arts", artsRouter);
router.use("/authors", authorsRouter);
router.use("/users", userRouter);

module.exports = router;
