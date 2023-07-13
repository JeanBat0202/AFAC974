const router = require("express").Router();

const authorControllers = require("../controllers/authorControllers");
const uploadAuthorImageControllers = require("../controllers/uploadAuthorImageControllers");

router.get("/", authorControllers.browse);
router.get("/:id", authorControllers.read);
router.put("/:id", authorControllers.edit);
router.post(
  "/",
  uploadAuthorImageControllers.uploadDataImage,
  authorControllers.add
);
router.delete("/:id", authorControllers.destroy);

module.exports = router;
