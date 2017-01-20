var express = require('express');

var postModel = function(Post) {
	addPost = function(title, text, author) {
		var newPost = new Post({ title: title, text: text, author: author });
		return newPost.save(function(err, docs) {
			if(err) console.log(err);

			console.log(docs);
			return docs;
		});
	},
	getPost = function(id) {
		console.log('id = ' + id);
		return Post.find(id ? { id: id } : {}, function(err, docs) {
			if(err) console.log(err);

			console.log(docs);
			return docs;
		});
	},
	removePost = function(id) {
		return Post.remove({ id: id }, function(err, docs) {
			if(err) console.log(err);

			console.log(docs);
			return docs;
		});
	}
	return {
		addPost: addPost,
		getPost: getPost,
		removePost: removePost
	}
};

module.exports = postModel;