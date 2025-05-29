const router = require("express").Router()
const { ru } = require("zod/v4/locales")
const controller = require("../controllers/phone.controller")


router.post("/" , controller.create)

router.get("/" , controller.getAll)

router.get("/:id" , controller.getOne)

router.put("/:id" , controller.update)

router.delete("/:id", controller.destroy)

module.exports =router