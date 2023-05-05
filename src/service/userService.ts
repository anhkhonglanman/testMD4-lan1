import {AppDataSource} from "../data-source";
import {User} from "../entity/user";

class UserService {
    private userRepository;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }

    checkUser = async (user) => {
        let userFind = await this.userRepository.find({username: user.username, password: user.password})
        return userFind
    }
    creatUser = async () => {

    }
}

export default new UserService();