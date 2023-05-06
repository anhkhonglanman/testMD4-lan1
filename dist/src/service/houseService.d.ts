declare class HouseService {
    private houseRepository;
    constructor();
    findAllHouse: () => Promise<any>;
    findHouse: (query: any) => Promise<any>;
}
declare const _default: HouseService;
export default _default;
