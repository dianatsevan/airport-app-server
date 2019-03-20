const express = require('express');
const router = express.Router();
const controllers = require('../controllers/luggage-types');

router.get('/luggage-types', controllers.getLuggageTypes);

module.exports = router;