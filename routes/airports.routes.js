const express = require('express');
const router = express.Router();
const AirportsController = require('../controllers/airports.controllers');

router.post('/airports', AirportsController.addAirport);
router.get('/airports/', AirportsController.getAirports);
router.put('/airports/:id', AirportsController.updateAirport);
router.delete('/airports/:id', AirportsController.deleteAirport);

module.exports = router;