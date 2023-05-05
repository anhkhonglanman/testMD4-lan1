import {AppDataSource} from "../data-source";
import {User} from "../entity/user";

class UserService {
    private userRepository;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }

    createUser = async (user) => {
        let newUser = await this.userRepository.save(user)
        return newUser
    }
}

export default new UserService();