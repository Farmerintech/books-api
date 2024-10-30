import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required:  [true, "please enter author's name"]
    },
    birthYear:{
        type:Number,
        required: true

    },
    bio:{
        type:String,
        required: true

    }
})


const Author = mongoose.model('Author', AuthorSchema);
export default Author