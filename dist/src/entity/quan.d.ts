import { City } from "./city";
import { Phuong } from "./phuong";
import { House } from "./house";
export declare class Quan {
    id: number;
    name: string;
    type: string;
    city: City;
    phuong: Phuong[];
    house: House[];
}
