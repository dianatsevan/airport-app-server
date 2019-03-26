const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users.controllers');

router.post('/user/signup', UsersController.signUpUser);
router.post('/user/login', UsersController.logInUser);
router.delete('/user/:userId', UsersController.deleteUser);

module.exports = router;