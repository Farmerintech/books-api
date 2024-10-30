export const Validator = (req, res, next) =>{
    const {title, author, publishedYear} = req.body;
    if(!title || !author || !publishedYear){
        return res
        .status(404)
        .json({
            message:"Tittle, Author and published year is required"
        })
    }
    next()
}