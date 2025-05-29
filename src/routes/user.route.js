const router = require("express").Router()
const {registerValidation} =require("../validations/user.validate")
const {validate} = require("../middlewares/validations")
const userCTRL = require("../controllers/user.controller")
router.post("/",
    validate(registerValidation),
    userCTRL.register
)

router.get("/",
    userCTRL.getall
)


router.get("/:id",
    userCTRL.getOne
)

module.exports= router