const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const FlightController = require('../controllers/flight.controllers');

router.post('/tickets', FlightController.addFlight);
router.get('/tickets', checkAuth, FlightController.getFlights);
router.put('/tickets/:id', FlightController.updateFlight);
router.delete('/tickets/:id', FlightController.deleteFlight);

module.exports = router;