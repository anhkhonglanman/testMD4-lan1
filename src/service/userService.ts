import {AppDataSource} from "../data-source";
import {User} from "../entity/user";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import {SECRET} from "../middleware/auth";

class UserService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }


    createUser = async (user) => {
        let password = await bcrypt.hash(user.password, 10)
        let newUser = new User();
        newUser.name = user.name;
        newUser.phoneNumber = user.phoneNumber;
        newUser.address = user.address;
        newUser.username = user.username;
        newUser.password = password;
        newUser.role = parseInt(user.role)
        await this.userRepository.save(newUser);
        return newUser
    }
    checkUser = async (user) => {
        let userFind = await this.userRepository.findOne({
            where: {
                username: user.username,
                // password: user.password
            }
        });
        if (userFind) {
            if (userFind) {
                // let pass = await bcrypt.compare(userData.password, user.password)
                let pass = await bcrypt.compare(user.password, userFind.password)
                if (pass) {
                   let  payload = {
                        id: user.id,
                        username: user.name
                    }
                    return jwt.sign(payload, SECRET, {
                        expiresIn: 36000 * 10 * 100
                    })
                } else {
                    return 'khong dung pass';
                }
            } else {
                return 'khong dung pass';
            }
        }else {
            return 'khong dung tai khoan hoac mat khau'
        }
    }

    findUserById = async (userId) => {
        let userFind = await this.userRepository.findOneBy({
            id: userId
        })
        // let user1 = AppDataSource.createQueryBuilder()
        //     .select("user")
        //     .from(User, "user")
        //     .where("user.id = :id", {id: userId})
        //     .getOne()
        return userFind;
    }
    updateUser = async (id, user) => {
        console.log(user)
        console.log(id)
        // let newUser = new User();
        // newUser.name=user.name;
        // newUser.phoneNumber = user.phoneNumber;
        // newUser.address = user.address;
        // newUser.username = user.username;
        // newUser.password = user.password;
        // newUser.role = parseInt(user.role)
        await this.userRepository.update({id: id}, user);
    }


}

export default new UserService();