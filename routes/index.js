var express = require('express');
var router = express.Router();

var snippetsArr = require('../public/javascripts/snippets.js');

console.log(snippetsArr);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req,res,next) {
  var inputArr = req.body.input.split(" ");
  var output = [];
  for (var i = 0; i < inputArr.length; i++) {
    var random = 0;
    var randomSnippet = "";
    random = Math.floor(Math.random() * inputArr.length);
    randomSnippet = snippetsArr[random];
    output.push(inputArr[i] + " " + randomSnippet);
  }
  output = output.join(" ");
  res.render('index', {output: output});
});

module.exports = router;
