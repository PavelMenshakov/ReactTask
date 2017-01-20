var express = require('express');
var models = require('../models/post');
var multer = require('multer');
var upload = multer();

var router = express.Router();
var mongoose = require('mongoose');
var post = mongoose.model('Post', { title: 'String', text: 'String', author: 'String' });


/* GET post listing. */
router.get('/:id', function(req, res, next) {
	models(post).getPost(req.params.id).then(function(result) {
		res.send(result); 
	  });	  
});

router.get('/', function(req, res, next) {
  models(post).getPost().then(function(result) {
		res.send(result); 
	  });
});

router.post('/', upload.array(), function(req, res, next) {
	console.log(req.body)
  models(post).addPost(req.body.title, req.body.text, req.body.author).then(function(result) {
	res.send(req.body); 
  }); 
});

module.exports = router;
