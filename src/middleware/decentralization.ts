export const decentralization = (req, res, next) => {
    if(req.decode.role === 'client'){
        next(req.decode)
    }else{
        res.status(401).json({
            message: 'You must be an administrator'
        })
    }
}