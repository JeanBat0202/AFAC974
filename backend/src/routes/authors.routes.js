const router = require("express").Router();

const authorControllers = require("../controllers/authorControllers");
const uploadAuthorImageControllers = require("../controllers/uploadAuthorImageControllers");
const AuthController = require("../controllers/AuthController");

router.get(
  "/",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  authorControllers.browse
);
router.get(
  "/:id",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  authorControllers.read
);
router.put(
  "/:id",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  authorControllers.edit
);
router.post(
  "/",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  uploadAuthorImageControllers.uploadDataImage,
  authorControllers.add
);
router.delete(
  "/:id",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  authorControllers.destroy
);

module.exports = router;
