const router = require("express").Router();
const artsRouter = require("./arts.routes");
const authorsRouter = require("./authors.routes");
const rolesRouter = require("./roles.routes");

router.use("/arts", artsRouter);
router.use("/authors", authorsRouter);
router.use("/roles", rolesRouter);

module.exports = router;
