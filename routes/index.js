const express = require('express');
const router = express.Router();

router.use('/', require('./airports'));

module.exports = router;