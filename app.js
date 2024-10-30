import express from "express";
import { connectDB } from "./config/db.js";
import router from "./routes/books.js";

const PORT = process.env.PORT || 5000;

const app = express();


app.use(express.urlencoded({extended:false}))

app.use(express.json());

app.use("/api/v1/books", router)


connectDB()
app.listen(PORT, ()=>{
    console.log(`server running on PORT ${PORT}`)
})
//create a book POST /api/v1/books