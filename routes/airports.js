const express = require('express');
const router = express.Router();
const controllers = require('../controllers/airports');

router.get('/airports', controllers.getAirports);

module.exports = router;