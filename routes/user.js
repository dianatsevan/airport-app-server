const express = require('express');
const router = express.Router();
const controllers = require('../controllers/user');

router.post('/tickets', controllers.postUserRequest);

module.exports = router;