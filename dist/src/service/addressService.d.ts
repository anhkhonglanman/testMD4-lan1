declare class AddressService {
    private cityRepository;
    private quanRepository;
    private phuongRepository;
    constructor();
    getCity: () => Promise<any>;
    checkUser: (user: any) => Promise<string>;
    findUserById: (userId: any) => Promise<any>;
    updateUser: (id: any, user: any) => Promise<void>;
    checkUsersignup: (user: any) => Promise<any>;
}
declare const _default: AddressService;
export default _default;
