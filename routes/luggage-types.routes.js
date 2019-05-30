const express = require('express');
const router = express.Router();
const passport = require('passport');
const LuggageTypeController = require('../controllers/luggage-types.controllers');

router.post('/luggage-types', LuggageTypeController.addLuggage);
router.get('/luggage-types', LuggageTypeController.getLuggageTypes);
// router.get('/luggage-types', passport.authenticate('jwt', {session: false}), LuggageTypeController.getLuggageTypes);
router.put('/luggage-types/:id', LuggageTypeController.updateLuggageType);
router.delete('/luggage-types/:id', LuggageTypeController.deleteLuggageType);

module.exports = router;