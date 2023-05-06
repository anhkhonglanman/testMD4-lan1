import { Contract } from "./contract";
import { House } from "./house";
export declare class User {
    id: number;
    name: string;
    phoneNumber: number;
    address: string;
    username: string;
    password: string;
    role: number;
    contract: Contract[];
    house: House[];
}
