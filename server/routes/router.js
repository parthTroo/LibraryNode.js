const express = require("express");
const route = express.Router();

const bookListController = require("../controller/BookList.controller");

route.get("/", (req, res) => {
	res.send("i am in home ");
});

route.post("/book/add", bookListController.createBookList);

route.get("/book/get", bookListController.getBookList);

route.delete("/book/delete/:id", bookListController.deleteBook);

route.put("/book/update", bookListController.updateBookData);

module.exports = route;
