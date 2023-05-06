import {AppDataSource} from "../data-source";
import {User} from "../entity/user";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import {SECRET} from "../middleware/auth";
import {City} from "../entity/city";
import {Phuong} from "../entity/phuong";
import {Quan} from "../entity/quan";

class AddressService {
    private cityRepository;
    private quanRepository;
    private phuongRepository;

    constructor() {
        this.cityRepository = AppDataSource.getRepository(City)
        this.quanRepository = AppDataSource.getRepository(Quan)
        this.phuongRepository = AppDataSource.getRepository(Phuong)
    }


    getCity = async () => {
        return await this.cityRepository.find()
    }
    checkUser = async (user) => {
        let userFind = await this.cityRepository.query(`select *
                                                        from user
                                                        where username = "${user.username}"`)
        let usserFinds = userFind[0]
        if (usserFinds) {
            let pass = await bcrypt.compare(user.password, usserFinds.password);
            if (pass) {
                let payload ;
                if (usserFinds.role === 1) {
                    payload = {
                        id: usserFinds.id,
                        username: user.username,
                        role: "client"
                    }
                } else {
                    payload = {
                        id: usserFinds.id,
                        username: user.username,
                        role: "owner"
                    }

                }
                return jwt.sign(payload, SECRET, {
                    expiresIn: 36000 * 10 * 100
                })
            } else {
                return 'khong dung pass';
            }

        } else {
            return 'khong dung tai khoan hoac mat khau'
        }
    }

    findUserById = async (userId) => {
        let userFind = await this.cityRepository.findOneBy({
            id: userId
        })
        return userFind;
    }
    updateUser = async (id, user) => {
        await this.cityRepository.update({id: id}, user);
    }
    checkUsersignup = async (user) => {
        let userFind = await this.cityRepository.findOne({
            where: {
                username: user.username,
                // password: user.password
            }
        });
        return userFind;
    }
}
export default new AddressService();