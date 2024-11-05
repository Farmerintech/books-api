import express from "express";
import { connectDB } from "./config/db.js";
import router from "./routes/booksRoute.js";
import AuthorsRouter from "./routes/authorRoute.js"
import GenreRouter from "./routes/genreRoute.js";
import userRouter from "./routes/usersRoutes.js";
const PORT = process.env.PORT || 5000;

const app = express();


app.use(express.urlencoded({extended:false}))

app.use(express.json());

app.use("/api/v1/books", router)
app.use("/api/v1/authors", AuthorsRouter)
app.use("/api/v1/genres", GenreRouter)
app.use("/api/v1/users", userRouter)
connectDB()
app.listen(PORT, ()=>{
    console.log(`server running on PORT ${PORT}`)
})
//create a book POST /api/v1/books