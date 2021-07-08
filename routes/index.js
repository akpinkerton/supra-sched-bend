var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.send('Welcome to Supra Schedule');
})




module.exports = router;
