import { House } from "./house";
import { User } from "./user";
import { ContractStatus } from "./contractStatus";
export declare class Contract {
    id: number;
    price: number;
    startMonth: Date;
    endMonth: Date;
    cost: number;
    house: House;
    user: User;
    contractStatus: ContractStatus[];
}
