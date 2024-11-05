export const Authenticator = (req, res, next) =>{
    const token = req.header("Authorization")?.replace("Bearer ", "");
    console.log(req.header)
    if(!token){
        return res.status(401).json({msg:'not Authorized'})
    }
    try {
        const decode = jwt.verify(token, "iugnrhhloyoher");
        req.user = decode;
        next()
    } catch (error) {
        return res.status(401).json({msg:'Invalid token'})
    }
}