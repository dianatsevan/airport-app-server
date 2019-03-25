const express = require('express');
const router = express.Router();

router.use('/', require('./airports.routes'));

router.use('/', require('./flights.routes'));

router.use('/', require('./luggage-types.routes'));
router.use('/', require('./plane-layout.routes'));;

module.exports = router;