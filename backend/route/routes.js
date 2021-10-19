const express = require('express');
const router = express.Router();
const signUpSchema = require('../models/signupmodel');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken'); 

router.post('/signup',async (req,res) => {

    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password,saltPassword);
    const username = req.body.username;
    const email = req.body.email;
    const user = await signUpSchema.findOne({username});

    if(user == null){
      const signedUpUser = new signUpSchema({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
        mobileNumber: req.body.mobileNumber,
        address: req.body.address

      })
      signedUpUser.save()
      .then(data => {
          res.json(data);
      })
      .catch(error => {
          res.json(error);
      }) 
    }else{
        if(user.email === email && user.username === username){
          res.send("User already exist");
        }else{
          const signedUpUser = new signUpSchema({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: securePassword,
            mobileNumber: req.body.mobileNumber,
            address: req.body.address
    
          })
          signedUpUser.save()
          .then(data => {
              res.json(data);
          })
          .catch(error => {
              res.json(error);
          }) 
        }
    }

})


router.post('/login',async (req,res) => {
    try{
        const username = req.body.username;
        const password = req.body.password;

        const user = await signUpSchema.findOne({username});
        const isMatch = bcrypt.compare(password,user.password);

          if(isMatch){
              res.json({user});
          }else{
              res.send("invalid details");
          }
    }catch(error){
        res.send("invalid details");
    }
})


// function verifyToken(req, res, next) {
//     const bearerHeader = req.headers['authorization'];

//     if(typeof bearerHeader !== 'undefined') {

//       const bearer = bearerHeader.split(' ');
//       const bearerToken = bearer[1];
//       req.token = bearerToken;

//       next();
//     } else {
//       res.sendStatus(403);
//     }
  
//   }

module.exports = router;