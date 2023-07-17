const router = require("express").Router();

const artControllers = require("../controllers/artControllers");
const uploadArtImage = require("../controllers/uploadArtImageControllers");
const AuthController = require("../controllers/AuthController");

router.get("/", artControllers.browse);
router.get("/:id", artControllers.read);
router.put(
  "/:id",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  uploadArtImage.uploadArtImageForEdition,
  artControllers.edit
);
router.post(
  "/",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  uploadArtImage.uploadArtImage,
  artControllers.add
);
router.delete(
  "/:id",
  AuthController.isUserConnected,
  AuthController.isUserAdmin,
  artControllers.destroy
);

module.exports = router;
