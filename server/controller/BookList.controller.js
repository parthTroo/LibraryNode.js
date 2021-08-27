const BookList = require("../model/BookList");

exports.createBookList = async (req, res) => {
	console.log("temp Book ", req.body);
	const tempBook = new BookList(req.body);
	await BookList.create(tempBook, (err, data) => {
		if (err) {
			return res.json({
				message: "Error to add",
				err: err,
			});
		}
		res.json({
			message: "added Book Data sucessfully",
			data: data,
		});
	});
};

exports.getBookList = async (req, res) => {
	let data = await BookList.find();
	let result = [];
	if (data) {
		data.forEach((e) => {
			let temp = {
				id: e._id,
				...e._doc,
			};
			result.push(temp);
		});

		return res.json({
			message: "success",
			data: result,
		});
	} else {
		return res.json({
			message: "Error to get data",
		});
	}
};

exports.deleteBook = async (req, res) => {
	console.log("req params", req.params);
	let data = await BookList.deleteOne({ _id: req.params.id });
	if (data) {
		return res.json({
			message: "success",
			data: data,
		});
	}
	return res.json({
		message: "fail",
		err: err,
	});
};

exports.updateBookData = async (req, res) => {
	if (!req.body) {
		return res.json({
			code: 400,
			message: "field is required",
		});
	}
	let data = await BookList.findByIdAndUpdate(
		{
			_id: req.body.id,
		},
		{
			author: req.body.author,
			country: req.body.country,
			imageLink: req.body.imageLink,
			language: req.body.language,
			link: req.body.link,
			pages: req.body.pages,
			title: req.body.title,
			year: req.body.year,
		},
		{ new: true }
	);
	if (data) {
		res.json({
			message: "success",
			data: data,
		});
	} else {
		return res.json({
			message: "failed",
			err: err,
		});
	}
};
