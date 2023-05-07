import houseService from "../service/houseService";
// export const checkOwnerShip = async (req, res, next,err) => {
//     let idHouse = req.params.id
//     let idOwner = req['decode'].id;
//     let house = await houseService.findHouseByIdOwner(idOwner);
//     if (house) {
//         house.forEach(item => {
//             if (item.id === idHouse) {
//                 return next()
//             } else {
//                 res.status(401).json({
//                     error: err.message,
//                     message: "khong co quyen+++++"
//                 })
//             }
//         })
//     } else {
//         res.status(401).json({
//             error: err.message,
//             message: "khong co quyen+++++"
//         })
//     }
//
//
// }


export const checkOwnerShip = async (req, res, next, ) => {
    let idHouse = req.params.id
    let idOwner = req['decode'].id;
    let house = await houseService.findHouseById(parseInt(idHouse));
    if (house.userId===idOwner) {
        return next()
    } else {
        res.status(401).json({
            message: "khong co quyen+++++"
        })

    }
}