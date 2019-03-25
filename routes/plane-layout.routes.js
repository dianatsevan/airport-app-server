const express = require('express');
const router = express.Router();
const PlaneLayoutController = require('../controllers/plane-layout.controllers');

router.post('/plane-layout', PlaneLayoutController.addPlaneLayout);
router.get('/plane-layout', PlaneLayoutController.getPlaneLayouts);
router.put('/plane-layout/:id', PlaneLayoutController.updatePlaneLayout);
router.delete('/plane-layout/:id', PlaneLayoutController.deletePlaneLayout);

module.exports = router;