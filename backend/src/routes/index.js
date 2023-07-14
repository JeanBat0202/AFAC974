const router = require("express").Router();
const artsRouter = require("./arts.routes");
const authorsRouter = require("./authors.routes");
const rolesRouter = require("./roles.routes");
const userRouter = require("./users.routes");
const artTypesRouter = require("./artTypes.routes");
const categoryRouter = require("./categories.routes");
const favoriteRouter = require("./favorites.routes");
const emailRouter = require("./email.routes");

router.use("/arts", artsRouter);
router.use("/authors", authorsRouter);
router.use("/roles", rolesRouter);
router.use("/users", userRouter);
router.use("/artTypes", artTypesRouter);
router.use("/categories", categoryRouter);
router.use("/favorites", favoriteRouter);
router.use("/emails", emailRouter);

module.exports = router;
