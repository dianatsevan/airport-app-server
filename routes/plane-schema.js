const express = require('express');
const router = express.Router();
const controllers = require('../controllers/plane-schema');

router.get('/plane-schema', controllers.getPlaneSchema);

module.exports = router;