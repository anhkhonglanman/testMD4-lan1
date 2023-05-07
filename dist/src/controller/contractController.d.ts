import { Request, Response } from "express";
declare class ContractController {
    getContract: (req: Request, res: Response) => Promise<void>;
    editContractByClient: (req: Request, res: Response) => Promise<void>;
    getAll: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ContractController;
export default _default;
