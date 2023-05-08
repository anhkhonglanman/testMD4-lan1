import { Contract } from "../entity/contract";
declare class ContractService {
    private contractRepository;
    constructor();
    getContractByUserID: (id: any) => Promise<any>;
    getContractByID: (id: any) => Promise<Contract>;
    showAll: () => Promise<any>;
    updateContractByClient: (id: any, data: any) => Promise<any>;
    addContractByClient: (id: any, data: any, cost: any, userId: any) => Promise<void>;
}
declare const _default: ContractService;
export default _default;
