import { Image } from "./image";
import { Contract } from "./contract";
import { User } from "./user";
import { Phuong } from "./phuong";
import { Quan } from "./quan";
import { City } from "./city";
export declare class House {
    id: number;
    status: boolean;
    price: number;
    description: string;
    image: Image[];
    contract: Contract[];
    user: User;
    phuong: Phuong;
    quan: Quan;
    city: City;
}
