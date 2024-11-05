import express from "express"
import { Register, Login } from "../controllers/userController.js";
import { Authenticator } from "../middlewares/authoticator.js";


const userRouter = express.Router();

userRouter.post('/register',  Register)

userRouter.get('/login', Authenticator, Login, (req, res)=>{
    res.json({user:req.user})
})

export default userRouter
