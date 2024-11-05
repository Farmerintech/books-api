import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    reviewerName:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true,
        min:1,
        max:5
    },
    date:{
        type:Date,
        default:Date.now()
    }
    
})

const reviewModel = mongoose.model('Review', ReviewSchema);
export default reviewModel