const express = require('express');
const router = express.Router();
const cors = require('cors');
const PaymentController = require('../controllers/payment.controllers');

router.post('/pay', PaymentController.createPaymentBill);

module.exports = router;