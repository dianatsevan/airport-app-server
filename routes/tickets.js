const express = require('express');
const router = express.Router();
const controllers = require('../controllers/tickets');

router.get('/tickets', controllers.getTickets);

module.exports = router;