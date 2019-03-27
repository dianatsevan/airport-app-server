const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/user.model');
const services = require('../../services/auth');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use('local-login', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  async (req, username, password, done) => {
    try {
      const user = await User.UserModel.findOne({ username: username });

      if (!user) {
        req.body.message = 'No user found';
        return done(null, false, { message: 'No user found' });
      }

      if (!user.validPassword(password)) {
        req.body.message = 'Wrong password';
        return done(null, false, { message: 'Wrong password'});
      }

      req.body.token = services.generateToken(user._id);

      return done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
));
