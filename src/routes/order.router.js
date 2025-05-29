const express = require('express');
const router = express.Router();
const controller = require("../controllers/order.controller")

router.post('/', controller.createOrder);
router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
