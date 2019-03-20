const express = require('express');
const router = express.Router();

router.use('/', require('./airports.routes'));
router.use('/', require('./flights.routes'));
router.use('/', require('./luggage-types'));
router.use('/', require('./plane-schema'));;

module.exports = router;