const productCTRL=require("../controllers/phone.controller")
const router = require("express").Router()

router.post("/" , productCTRL.create)

router.get("/" , productCTRL.getAll)

router.get("/:id" , productCTRL.getOne)

router.put("/:id" , productCTRL.update)

router.delete("/:id", productCTRL.destroy)

module.exports= router