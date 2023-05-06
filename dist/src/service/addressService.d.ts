declare class AddressService {
    private cityRepository;
    private quanRepository;
    private phuongRepository;
    constructor();
    getCity: () => Promise<any>;
}
declare const _default: AddressService;
export default _default;
