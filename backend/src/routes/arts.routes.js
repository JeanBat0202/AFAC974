const router = require("express").Router();

const artControllers = require("../controllers/artControllers");

router.get("/", artControllers.browse);
router.get("/:id", artControllers.read);
router.put("/:id", artControllers.edit);
router.post("/", artControllers.add);
router.delete("/:id", artControllers.destroy);

module.exports = router;
