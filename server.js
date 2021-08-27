const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT =  8000;

require("./dbconfig");
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
	console.log("listing on Port :" + PORT);
});
