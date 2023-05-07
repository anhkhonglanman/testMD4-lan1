export const checkRoleLandlord = (req, res, next) => {
    console.log(req.decode)
    if (req.decode.role.id === 2){
        return  next()
    } else {
        res.status(401).json({
            message: 'You must be an administrator'
        })
    }

}