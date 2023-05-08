import { House } from "../entity/house";
declare class HouseService {
    private houseRepository;
    constructor();
    findAllHouse: () => Promise<any>;
    findHouseById: (id: any) => Promise<House>;
    findHouse: (query: any) => Promise<any>;
    addHouse: (house: any, id: any) => Promise<House>;
    updateHouse: (id: any, house: any) => Promise<void>;
    delete: (id: any) => Promise<string>;
    findHouseByIdOwner: (id: any) => Promise<any>;
}
declare const _default: HouseService;
export default _default;
