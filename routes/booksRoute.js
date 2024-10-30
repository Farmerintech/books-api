import express from "express"
import { 
    createBook, 
    deleteBook, 
    getASingleBook, 
    getBooks, 
    updateBook 
} 
from "../controllers/BooksController.js";
import { Validator } from "../middlewares/validator.js";

const router = express.Router();
//craete book
router.post("/", Validator, createBook)
// get all  books
router.get("/", getBooks)
// get a single books
router.get("/:id", getASingleBook)
// Update book
router.put("/:id", Validator, updateBook)
// delete book
router.delete("/:id", deleteBook)

export default router;