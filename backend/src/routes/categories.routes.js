const router = require("express").Router();

const categoryControllers = require("../controllers/categoryControllers");
const AuthController = require("../controllers/AuthController");

router.get(
  "/",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  categoryControllers.browse
);
router.get(
  "/:id",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  categoryControllers.read
);
router.put(
  "/:id",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  categoryControllers.edit
);
router.post(
  "/",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  categoryControllers.add
);
router.delete(
  "/:id",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  categoryControllers.destroy
);

module.exports = router;
