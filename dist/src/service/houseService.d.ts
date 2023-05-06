declare class HouseService {
    private houseRepository;
    constructor();
    findAllHouse: () => Promise<any>;
    findHouse: (query: any) => Promise<any>;
    addHouse: (house: any, id: any) => Promise<void>;
    updateHouse: (id: any, house: any) => Promise<void>;
    findHouseById: (id: any) => Promise<any>;
    delete: (id: any) => Promise<string>;
}
declare const _default: HouseService;
export default _default;
