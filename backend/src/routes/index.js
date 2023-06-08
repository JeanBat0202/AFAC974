const router = require("express").Router();
const artsRouter = require("./arts.routes");
const authorsRouter = require("./authors.routes");
const favoritesRouter = require("./favorites.routes");

router.use("/arts", artsRouter);
router.use("/authors", authorsRouter);
router.use("/favorites", favoritesRouter);

module.exports = router;
