const router = require("express").Router();

const favoriteControllers = require("../controllers/favoriteControllers");
const AuthController = require("../controllers/AuthController");

router.get("/", AuthController.isUserConnected, favoriteControllers.browse);
router.get(
  "/:id",
  AuthController.isUserConnected,
  favoriteControllers.browseByUser
);
router.get(
  "/by-fav/:id",
  AuthController.isUserConnected,
  favoriteControllers.read
);
router.put("/:id", AuthController.isUserConnected, favoriteControllers.edit);
router.post("/", AuthController.isUserConnected, favoriteControllers.add);
router.delete(
  "/:id",
  AuthController.isUserConnected,
  favoriteControllers.destroy
);

module.exports = router;
