declare class AddressService {
    private cityRepository;
    private quanRepository;
    private phuongRepository;
    constructor();
    getCity: () => Promise<any>;
    getQuan: () => Promise<any>;
    getPhuong: () => Promise<any>;
}
declare const _default: AddressService;
export default _default;
