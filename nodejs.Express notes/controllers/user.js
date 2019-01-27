const jwt = require('jsonwebtoken'); //<--- 1
const bcrypt = require('bcrypt'); //<--- 2
const User = require('../models/user'); //<--- 3

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)//<--- 4
        .then(
            (hash) => {
                const user = new User({
                    email: req.body.email,
                    password: hash
                });
                user.save()
                    .then(
                        () => {
                            res.status(200).json({
                                message: 'Nouvel utilisateur ajouté !'
                            });
                        }
                    ).catch(
                        (error) => {
                            res.status(500).json({
                                error: error
                            });
                        }
                    );
            }
        );
};
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })//<--- 5
    .then(
      (user) => {
        if (!user) {//<---6
          return res.status(401).json({
            error: new Error('User not found!')
          });
        }
        bcrypt.compare(req.body.password, user.password)//<--7
        .then(
          (valid) => {
            if (!valid) {//<--8
              return res.status(401).json({
                error: new Error('Incorrect password!')
              });
            }
            const token = jwt.sign(//<---9
              { userId: user._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' });
            res.status(200).json({
              userId: user._id,
              token: token
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
  }