const router = require("express").Router();
const artsRouter = require("./arts.routes");
const authorsRouter = require("./authors.routes");
const rolesRouter = require("./roles.routes");
const userRouter = require("./users.routes");
const categoryRouter = require("./categories.routes");

router.use("/arts", artsRouter);
router.use("/authors", authorsRouter);
router.use("/roles", rolesRouter);
router.use("/users", userRouter);
router.use("/categories", categoryRouter);

module.exports = router;
