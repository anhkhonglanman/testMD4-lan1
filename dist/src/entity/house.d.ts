import { Image } from "./image";
import { Contract } from "./contract";
import { User } from "./user";
import { Phuong } from "./phuong";
export declare class House {
    id: number;
    status: boolean;
    price: number;
    description: string;
    image: Image[];
    contract: Contract[];
    user: User;
    phuong: Phuong;
}
