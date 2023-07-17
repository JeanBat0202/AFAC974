const router = require("express").Router();

const roleControllers = require("../controllers/roleControllers");
const AuthController = require("../controllers/AuthController");

router.get(
  "/",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  roleControllers.browse
);
router.get(
  "/:id",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  roleControllers.read
);
router.put(
  "/:id",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  roleControllers.edit
);
router.post(
  "/",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  roleControllers.add
);
router.delete(
  "/:id",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  roleControllers.destroy
);

module.exports = router;
