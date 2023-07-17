const router = require("express").Router();
const userControllers = require("../controllers/userControllers");
const AuthController = require("../controllers/AuthController");

router.get(
  "/",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  userControllers.browse
);

router.get("/refreshToken", AuthController.refreshToken);
router.get(
  "/:id",
  AuthController.isUserConnected,
  AuthController.isUserAllowedToGet,
  userControllers.read
);
router.put(
  "/:id",
  AuthController.isUserConnected,
  AuthController.isUserAllowedToGet,
  userControllers.edit
);
router.post(
  "/",
  AuthController.isUserConnected,
  AuthController.isUserAllowedToGet,
  userControllers.hashPassword,
  userControllers.add,
  userControllers.read
);
router.post("/login", userControllers.login);
router.delete(
  "/:id",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  userControllers.destroy
);

module.exports = router;
