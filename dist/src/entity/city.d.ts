import { Quan } from "./quan";
import { House } from "./house";
export declare class City {
    id: number;
    name: string;
    type: string;
    slug: string;
    quan: Quan[];
    house: House[];
}
