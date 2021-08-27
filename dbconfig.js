const mongoose = require("mongoose");

module.exports = {
	connection: mongoose
		.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("sucessfully connected to mongoDb ");
		})
		.catch((err) => {
			console.log("could not connect to mongodb :: ", err);
			process.exit();
		}),
};
