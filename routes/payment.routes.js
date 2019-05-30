const express = require('express');
const router = express.Router();
const cors = require('cors');
const PaymentController = require('../controllers/payment.controllers');

router.post('/pay', PaymentController.createPaymentBill);

router.post('/success', PaymentController.successPayment);

router.get('/cancel', PaymentController.cancelPayment);

module.exports = router;