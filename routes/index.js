const express = require('express');
const router = express.Router();

router.use('/', require('./airports.routes'));
router.use('/', require('./flights.routes'));
router.use('/', require('./luggage-types.routes'));
router.use('/', require('./plane-layout.routes'));
router.use('/', require('./user.routes'));

module.exports = router;