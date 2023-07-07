const router = require("express").Router();

const artControllers = require("../controllers/artControllers");
const uploadArtImage = require("../controllers/uploadArtImageControllers");

router.get("/", artControllers.browse);
router.get("/:id", artControllers.read);
router.put("/:id", artControllers.edit);
router.post("/", uploadArtImage.uploadArtImage, artControllers.add);
router.delete("/:id", artControllers.destroy);

module.exports = router;
