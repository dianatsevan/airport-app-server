const express = require('express');
const router = express.Router();
const AirportsController = require('../controllers/airports');

router.post('/airports', AirportsController.create);
router.get('/airports/:id', AirportsController.readOne);
router.get('/airports/', AirportsController.readAll);
router.put('/airports/:id', AirportsController.update);
router.delete('/airports/:id', AirportsController.delete);

module.exports = router;