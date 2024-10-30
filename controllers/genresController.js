import Genre from "../models/genreModel.js";

//createGenre
export const createGenre = async (req, res) =>{
    try {
        const genre = await Genre.create(req.body)
        res
        .status(201)
        .json({data:genre, message:"new Genre created successfully..."})
    } catch (error) {
        res
        .status(500)
        .json({message: error})
    }
}

//getAllGenre

export const getAllGenre = async (req, res) =>{
    try {
        const genres = await Genre.find();
        res
        .status(200)
        .json({data:genres, message:"All genres fectched"})
    } catch (error) {
        res
        .status(500)
        .json({message:error})
    }

}

//getASingleGenre

export const getASingleGenre = async (req, res) =>{
    try {
        const id = req.params.id
        const genre = await Genre.findById(id);
        if(!genre){
            res
            .status(404)
            .json({message:`No genres with such id ${id}`})
        }
        res
        .status(200)
        .json({data:genre, message:`Genre with id ${id} retrieved`})
    } catch (error) {
        res
        .status(500)
        .json({message:error})
    }

}

// updateGenre

export const updateGenre = async() =>{
    try {
        const id = req.params.id
        const genre = await Genre.findByIdAndUpdate(id, 
            req.body, {
            new:true
        });
        if(!genre){
            res
            .status(404)
            .json({message:`No genres with such id ${id}`})
        }
        res
        .status(200)
        .json({data:genre, message:`Genre with id ${id} Updated`})
    } catch (error) {
        res
        .status(500)
        .json({message:error})
    }
}

//deleteGenre

export const deleteGenre = async() =>{
    try {
        const id = req.params.id
        const genre = await Genre.findByIdAndDelete(id);
        if(!genre){
            res
            .status(404)
            .json({message:`No genres with such id ${id}`})
        }
        res
        .status(200)
        .json({data:genre, message:`Genre with id ${id} deleted`})
    } catch (error) {
        res
        .status(500)
        .json({message:error})
    }
}