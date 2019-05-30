const express = require('express');
const passport = require('passport');
const router = express.Router();
const UsersController = require('../controllers/users.controllers');

router.post('/user/register', passport.authenticate('local-register', {session: false}), UsersController.registerUser);
router.post('/user/login', passport.authenticate('local-login', {session: false}), UsersController.logInUser);
router.get('/user/logout', UsersController.logOutUser);
router.post('/user/check-auth', passport.authenticate('jwt', {session: false}), UsersController.checkAuth);
router.get('/users', UsersController.getUsers);
router.delete('/user/:id', UsersController.deleteUser);

module.exports = router;