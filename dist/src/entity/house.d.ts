import { Image } from "./image";
import { Contract } from "./contract";
import { User } from "./user";
import { Phuong } from "./phuong";
import { HouseStatus } from "./housestatus";
export declare class House {
    id: number;
    price: number;
    description: string;
    image: Image[];
    contract: Contract[];
    user: User;
    phuong: Phuong;
    houseStatus: HouseStatus;
}
