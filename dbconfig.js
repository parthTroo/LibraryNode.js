const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://admin:admin@cluster0.2hlyo.mongodb.net/Library_App?retryWrites=true&w=majority";
module.exports = {
	connection: mongoose
		.connect(MONGO_URL, {
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
