import express from "express"
import { createBook, deleteBook, getASingleBook, getBooks, updateBook } from "../controllers/BooksController.js";

const router = express.Router();

//craete book
router.post("/", createBook)
// get all  books
router.get("/", getBooks)
// get a single books
router.get("/:id", getASingleBook)
// Update book
router.put("/:id", updateBook)
// delete book
router.delete("/:id", deleteBook)

export default router;