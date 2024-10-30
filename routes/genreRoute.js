import { Router } from "express" 
import { createGenre, deleteGenre, getAllGenre, getASingleGenre, updateGenre } from "../controllers/genresController.js";


const GenreRouter = Router()
GenreRouter.post('/', createGenre);
GenreRouter.get('/', getAllGenre)
GenreRouter.get('/:id', getASingleGenre)
GenreRouter.put('/:id', updateGenre);
GenreRouter.delete('/:id', deleteGenre)

export default GenreRouter