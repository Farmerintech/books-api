import Book from "../models/BooksModel.js";

//create book
export const createBook = async (req, res)=>{
    try {
        const newBook = await Book.create(req.body);
    res.status(201).json({data:newBook, message:"new book created successfully"}) 
    } catch (error) {
        res.status(500).json({message: error})            
    }
}

//get all books
export const getBooks = async (req, res) =>{
   
    try {
        const {author, publishedYear, title} = req.query
        const filter = {}
        if(author){
            filter.author = author;
        }
        if(publishedYear){
            filter.publishedYear = publishedYear;
        }
        if(title){
            filter.title = title;
        }
        const books = await Book.find(filter)
        res.status(201).json({data: books, message: "books get"}) 
    } catch (error) {
        res.status(500).json({message: error})                
    }
}

//get a single book
export const getASingleBook = async (req, res) =>{
    const id = req.params.id
    try {
        const book = await Book.findById(id);
        if(!book){
            return res.status(400).json({message: `Books with ${id} not found` })
        }
        res.status(201).json({data:book, message:`Books with id ${id}`}) 
    } catch (error) {
        res.status(500).json({message: error})                
    }    
}

// update a book
export const updateBook = async (req, res) =>{
    const id = req.params.id
    try {
        const book = await Book.findByIdAndUpdate(id, req.body, {
            new:true
        });
        if(!book){
            return res.status(400).json({message: `Books with ${id} not found` })
        }
        res.status(200).json({data:book, message:`Books with id ${id} updated successfully...`}) 
    } catch (error) {
        res.status(500).json({message: error})                 
    }    
}

// delete a book
export const deleteBook = async (req, res)=>{
    const id = req.params.id
    try {
        const book = await Book.findByIdAndDelete(id);
        if(!book){
            return res.status(404).json({message: `Books with ${id} not found` })
        }
        res.status(200).json({data:book, message:`Books with id ${id} deleted sucessfully...`}) 
    } catch (error) {
        res.status(500).json({message: error})                

    }    
} 