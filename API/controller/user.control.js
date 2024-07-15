
export const test =( req,res)=>{
    res.json({msg:"Hello World" })

}
export const updateUser = (req,res,next) => {
    if( req.user.id !== req.params.id) return next( errorHandler(403,"You can only update your own account"));
    try {
        if(req.body.password)
            req.body.password = bycryptjs.hashSync(req.body.password,10)
    } catch (error) {
        next(error);
    }
}