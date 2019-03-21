const express = require('express');
const router = express.Router();

router.use('/', require('./airports.routes'));
router.use('/', require('./tickets'));
router.use('/', require('./luggage-types'));
router.use('/', require('./plane-schema'));;

module.exports = router;