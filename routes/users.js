var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");

var db = require("../model/helper");
require("dotenv").config();

const supersecret = process.env.SUPER_SECRET;

router.post("/login", function (req, res, next) {
  //login logic
  const { email, password } = req.body;
  db(`SELECT * FROM users WHERE email= "${email}" AND password= "${password}"; `)
   .then((results) => {
     if(results.data.length) {

       var token = jwt.sign({ userId: results.data[0].id}, supersecret);

       res.send({message: "User OK, here is your token!", token})
     }
     else{
       res.status(400).send({message: "User not found!"})
     }
   })
})

//GET all users
router.get("/", function(req, res, next){
  db(`SELECT * FROM users;`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
})

// POST a new user into the DB
router.post("/", function (req, res, next) {
  const { name,  email, password, confirmpassword } = req.body;
  db(
    `INSERT INTO users ( name, email, password, confirmpassword) VALUES ("${name}", "${email}", "${password}", "${confirmpassword}");`
  )
    .then((results) => {
      res.send({ msg: "Your data was inputted correctly!" });
    })
    .catch((err) => res.status(500).send(err));
});


router.get("/profile", function (req, res, next) {

  const token = req.headers["x-access-token"]
  if(!token) {
    res.status(401).send({message: "Please log in!"})
  }
  else {
    jwt.verify(token, supersecret, function (err, decoded){
      if(err) res.status(401).send({ message: err.message });
      else{
        const {userId} = decoded
        res.send({message: `Here is your private data for user ${userId}!`})
      }
    })
  }

})

router.post("/signup", function (req, res, next) {

})


module.exports = router;
