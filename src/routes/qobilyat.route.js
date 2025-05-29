const express = require("express");
const router = express.Router();
const qobilyatController = require("../controllers/qobilyat.controller");
const {validate} = require("../middlewares/validations")
const {qobilyatSchema} = require("../validations/qobilyat.validate")
router.post("/",validate(qobilyatSchema), qobilyatController.create);
router.get("/", qobilyatController.getAll);
router.get("/:id", qobilyatController.getOne);
router.put("/:id",validate(qobilyatSchema), qobilyatController.update);
router.delete("/:id", qobilyatController.destroy);

module.exports = router;
