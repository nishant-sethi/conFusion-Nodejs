var express = require('express');
var router = express.Router();
var passport = require('passport');
var authenticate = require('../authenticate');

const cors = require('./cors');

const bodyParser = require('body-parser');
var User = require('../models/user');

router.use(bodyParser.json());


/* GET users listing. */
router.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
  .get('/', authenticate.verifyUser, authenticate.verifyAdmin, function (req, res, next) {
    User.find({}).then(users => {
      if (users) {
        res.json(users)
      }
      else {
        next(err);
      }
    })
      .catch(err => next(err));
  });

router.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); }).post('/signup', (req, res, next) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ err: err });
      }
      else {
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            success: true,
            status: 'Registration Successful!'
          });
        });
      }
    }
  );
});

router.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); }).post('/login', passport.authenticate('local'), (req, res) => {

  var token = authenticate.getToken({
    _id: req.user._id
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(
    {
      success: true,
      token: token,
      status: 'You are successfully logged in!'
    });
});

router.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); }).get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/')
  }
  else {
    var err = new Error('You are not logged in');
    err.status = 403;
    next(err);
  }
});

module.exports = router;
