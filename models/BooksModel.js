import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    author:{
        type:String,
        required: true
    },
    publishedYear: {
        type:Number,
        required: true
    },
    genre:{
        type:String,
        required: false
    },
})


const Book = mongoose.model("Book", BookSchema);

export default Book 