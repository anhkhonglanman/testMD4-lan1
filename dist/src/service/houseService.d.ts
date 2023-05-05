declare class HouseService {
    private houseRepository;
    constructor();
    findAllHouse: () => Promise<any>;
    createHouse: (house: any) => Promise<void>;
}
declare const _default: HouseService;
export default _default;
