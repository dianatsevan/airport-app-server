const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users.controllers');

router.post('/user/register', UsersController.registerUser);
router.post('/user/login', UsersController.logInUser);
// router.get('/user/logout', UsersController.logOutUser);
router.get('/users', UsersController.getUsers);
// router.delete('/user/:userId', UsersController.deleteUser);

module.exports = router;