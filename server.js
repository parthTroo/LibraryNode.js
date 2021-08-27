const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8080;

require("./dbconfig");
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
	console.log("listing on Port :" + PORT);
});
