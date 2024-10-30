import Author from "../models/authorModel.js"


//createauthor


export const createAuthor = async(req, res) =>{
    try {
        const author = await Author.create(req.body);
        res.status(201).json({data:author, message:"new author created"})
    } catch (error) {
        res.status(500).json({message: error})
    }

}

// getAllauthors

export const getAllAuthors = async (req, res) =>{
    try {
        const authors = await Author.find()
        res
        .status(200)
        .json({data:authors, message:"authors"})
    } catch (error) {
        res
        .status(500)
        .json({message: error})                
        
    }
}

//getASingleAuthor

export const getASingleAuthor = async (req, res) =>{
    try {
        const id = req.params.id
        const author = await Author.findById(id);
        if(!author){
            res
            .status(400)
            .json({message:`No user with id ${id} exist`})
        }
        res
        .status(200)
        .json({data:author, message:`User with id ${id} fetched`})
    } catch (error) {
        
    }
}

// UpdateAuthor

export const UpdateAuthor = async (req, res) =>{
    try {
        const id = req.params.id
        const author = await Author.findByIdAndUpdate(id, 
            req.body,{
            new:true
        });
        if(!author){
            res
            .status(400)
            .json({message:`No user with id ${id} exist`})
        }
        res
        .status(200).
        json({data:author, message:`User with id ${id} updated`})
    } catch (error) {
        
    }

}

//deleteAuthor

export const deleteAuthor = async(req, res) =>{
    try {
        const id = req.params.id
        const author = await Author.findByIdAndDelete(id);
        if(!author){
            res
            .status(400).
            json({message:`No user with id ${id} exist`})
        }
        res
        .status(200)
        .json({data:author, message:`User with id ${id} deleted`})
    } catch (error) {
        
    }

}