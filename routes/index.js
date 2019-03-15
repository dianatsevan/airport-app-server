const express = require('express');
const router = express.Router();

router.use('/', require('./airports'));
router.use('/', require('./user'));
router.use('/', require('./luggage-types'));

module.exports = router;