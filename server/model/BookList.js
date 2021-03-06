const mongoose = require("mongoose");

let BookListSchema = new mongoose.Schema({
	author: {
		type: String,
	},
	country: {
		type: String,
	},
	imageLink: {
		type: String,
	},
	language: {
		type: String,
	},
	link: {
		type: String,
	},
	pages: {
		type: Number,
	},
	title: {
		type: String,
	},
	year: {
		type: Number,
	},
});

module.exports = mongoose.model("BookList", BookListSchema);
