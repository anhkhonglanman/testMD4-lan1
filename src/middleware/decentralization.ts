export const decentralization = (req, res, next) => {
    if(req.decode.role === 1){
        next()
    }else{
        res.status(200).json({
            message:'khong co quyen',
            success: false
            }
        )
    }
}