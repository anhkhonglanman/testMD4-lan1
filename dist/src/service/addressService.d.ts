import { Phuong } from "../entity/phuong";
import { Quan } from "../entity/quan";
declare class AddressService {
    private cityRepository;
    private quanRepository;
    private phuongRepository;
    constructor();
    getCity: () => Promise<any>;
    getQuan: (id: any) => Promise<Quan[]>;
    getPhuong: (id: any) => Promise<Phuong[]>;
    getPhuongDetail: (id: any) => Promise<Phuong>;
}
declare const _default: AddressService;
export default _default;
