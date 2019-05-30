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
      const user = await User.UserModel.findOne({username});

      if (!user) {
        req.body.message = 'No user found';
        return done(null, false, { message: 'No user found' });
      }

      if (!user.validPassword(password)) {
        req.body.message = 'Wrong password';
        return done(null, false, { message: 'Wrong password'});
      }

      if (user.role !== req.body.role) {
        req.body.message = `not a ${req.body.role}`;
        return done(null, false, { message: 'not a user'});
      }

      req.body.token = services.generateToken(user._id);

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  }
));

passport.use('local-register', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  async (req, email, password, done) => {
    try {
      const user = await User.UserModel.findOne({username: email});

      if (user) {
        return done(null, false);
      } else {
        const newUser = new User.UserModel({
          ...req.body,
          username: req.body.email,
          password: services.generateHash(password)
        });

        await newUser.save()
          .then(() => {
            req.body.token = services.generateToken(newUser._id);
            req.body.id = newUser._id;
          })
          .catch(err => console.log(err));

        return done(null, newUser);
      }
    } catch (error) {
      done(null, error);
    }
  }
));