var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookModel = new Schema({
	title: {type: String, required: true},
	author: {type: String},
	genre:{type: String},
	read:{
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('book', bookModel);
