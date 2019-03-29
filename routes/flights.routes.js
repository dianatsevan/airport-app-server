const express = require('express');
const router = express.Router();
const passport = require('passport');
const FlightController = require('../controllers/flight.controllers');

router.post('/tickets', FlightController.addFlight);
router.get('/tickets', passport.authenticate('jwt', {session: false}),FlightController.getFlights);
router.put('/tickets/:id', FlightController.updateFlight);
router.delete('/tickets/:id', FlightController.deleteFlight);

module.exports = router;