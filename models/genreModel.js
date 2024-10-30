import mongoose from "mongoose";

const GenreSchema = new mongoose.Schema({
    name:{
        type: String,
        required:  [true, "please enter genre's name"]
    },
})


const Genre = mongoose.model('Genre', GenreSchema);
export default Genre
// const Genre = mongoose.model('Genre', 
//     new mongoose.Schema({

// }))