import { Router } from "express" 
import { createAuthor, deleteAuthor, getAllAuthors, getASingleAuthor, UpdateAuthor } from "../controllers/authorController.js"


const AuthorsRouter = Router()
AuthorsRouter.post('/', createAuthor);
AuthorsRouter.get('/', getAllAuthors)
AuthorsRouter.get('/:id', getASingleAuthor)
AuthorsRouter.put('/:id', UpdateAuthor);
AuthorsRouter.delete('/:id', deleteAuthor)

export default AuthorsRouter