export const checkOwnerShip = (req, res, next) => {
    console.log(req.params.id);

    next()
}