const productCTRL=require("../controllers/product.controller")
const {validate} = require("../middlewares/validations")
const {productSchema} = require("../validations/product.validate")
const router = require("express").Router()

router.post("/" ,validate(productSchema), productCTRL.create)

router.get("/" , productCTRL.getall)

router.get("/:id" , productCTRL.getOne)

router.put("/:id" ,validate(productSchema), productCTRL.update)

router.delete("/:id", productCTRL.destroy)

module.exports= router