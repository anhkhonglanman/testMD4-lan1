import houseService from "../service/houseService";

export const checkOwnerShip = async (req, res, next, ) => {
    let idHouse = req.params.id
    let idOwner = req['decode'].id;
    let house = await houseService.findHouseById(parseInt(idHouse));
    if (house.userId === idOwner) {
        return next()
    } else {
        res.status(401).json({
            message: "khong co quyen+++++"
        })

    }
}