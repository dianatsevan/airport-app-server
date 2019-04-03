const express = require('express');
const router = express.Router();
const OrderControllers = require('../controllers/order.controllers');

router.post('/order', OrderControllers.createOrder);
router.get('/order', OrderControllers.getOrders);

module.exports = router;