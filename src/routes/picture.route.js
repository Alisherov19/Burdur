const router = require("express").Router()
const picCTRL = require("../controllers/pictures.controller")
const {validate} = require("../middlewares/validations")
const {pictureScheme} = require("../validations/picture.validate")

router.post("/",validate(pictureScheme), picCTRL.create)
router.get("/", picCTRL.getAll)
router.get("/:id", picCTRL.getOne)
router.put("/:id",validate(pictureScheme), picCTRL.update)
router.delete("/:id", picCTRL.destroy)

module.exports = router