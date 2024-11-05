import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    author:{
        type:String,
        // type:mongoose.Schema.Types.ObjectId,
        ref:"authorModel",
        required: true
    },
    publishedYear: {
        type:Number,
        required: true
    },
    genre:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Genre",
        required: false
    },
})


const Book = mongoose.model("Book", BookSchema);

export default Book 