import { User } from "../entity/user";
declare class UserService {
    private userRepository;
    constructor();
    createUser: (user: any) => Promise<User>;
    checkUser: (user: any) => Promise<string>;
    findUserById: (userId: any) => Promise<any>;
    updateUser: (id: any, user: any) => Promise<void>;
}
declare const _default: UserService;
export default _default;
