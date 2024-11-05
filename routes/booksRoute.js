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
import { Authenticator } from "../middlewares/authoticator.js";

const router = express.Router();
//craete book
router.post("/", Validator, createBook)
// get all  books
router.get("/", Authenticator, getBooks)
// get a single books
router.get("/:id", Authenticator, getASingleBook)
// Update book
router.put("/:id", Validator, updateBook)
// delete book
router.delete("/:id", deleteBook)

export default router;