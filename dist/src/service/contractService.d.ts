declare class ContractService {
    private contractRepository;
    constructor();
    getContractByUserID: (id: any) => Promise<any>;
    getContractByHouseId: (id: any) => Promise<any>;
    showAll: () => Promise<any>;
    updateContractByClient: (id: any, data: any) => Promise<any>;
}
declare const _default: ContractService;
export default _default;
