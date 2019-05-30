const paypal = require('paypal-rest-sdk');
require('../config/paypal');

exports.createPaymentBill = (req, res) => {
  console.log(req.body);
  console.log('it works\n\n');

  paypal.payment.create(req.body, (error, payment) => {
    if (error) {
        throw error;
    } else {
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === 'approval_url') {
            res.send(payment.links[i].href);
          }
        }
    }
  });
};

exports.successPayment = (req, res) => {
  const paymentId = req.body.paymentId;
  const execute_payment_json = req.body.executePaymentObject;

  paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log(JSON.stringify(payment));
        res.send('success');
    }
  });
};

exports.cancelPayment = (req, res) => {
  res.send('cancel');
};
