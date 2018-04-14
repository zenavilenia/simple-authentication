const User = require('../models/user.model.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  signin: (req, res) => {
    const {email, password} = req.body;

    User.findOne({
      email
    }, function(err, user) {
      if(user) {
        bcrypt.compare(password, user.password, function(err, response) {
          if(response) {
            var token = jwt.sign({ email: user.email }, process.env.SECRET);
            console.log(token)
            res.send(
              {
                token
              }
            ); 
          }
        });
      }
    })

    
  },
  register: (req, res) => {
    const {email, password} = req.body;
    console.log(req.body)

    bcrypt.hash(password, 10, function(err, hash) {
      
      User.create({
        email, password: hash
      }, function (err, result) {
        if(err) {
          res.send(400).json({
            message: err
          })
        } else {
          res.send(
            {
              data: result
            }
          ); 
        }
      })
    });
  }
}