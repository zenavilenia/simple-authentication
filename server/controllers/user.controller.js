const User = require('../models/user.model.js')
var bcrypt = require('bcrypt');

module.exports = {
  signin: (req, res) => {
    const {email, password} = req.body;

    User.findOne({
      email
    }, function(err, user) {
      // res.send(
      //   {
      //     user
      //   }
      // );
      if(user) {
        bcrypt.compare(password, user.password, function(err, res) {
          if(res) {
            
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