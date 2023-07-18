const router = require("express").Router();
const artTypeControllers = require("../controllers/artTypeControllers");
const AuthController = require("../controllers/AuthController");

router.get(
  "/",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  artTypeControllers.browse
);
router.get(
  "/:id",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  artTypeControllers.read
);
router.put(
  "/:id",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  artTypeControllers.edit
);
router.post(
  "/",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  artTypeControllers.add
);
router.delete(
  "/:id",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  artTypeControllers.destroy
);

module.exports = router;
