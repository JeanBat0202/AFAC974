const router = require("express").Router();
const artTypeControllers = require("../controllers/artTypeControllers");

router.get("/", artTypeControllers.browse);
router.get("/:id", artTypeControllers.read);
router.put("/:id", artTypeControllers.edit);
router.post("/", artTypeControllers.add);
router.delete("/:id", artTypeControllers.destroy);

module.exports = router;
