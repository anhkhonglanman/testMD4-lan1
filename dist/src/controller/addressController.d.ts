import { Request, Response } from "express";
declare class AddressController {
    getCity: (req: Request, res: Response) => Promise<void>;
    getQuan: (req: Request, res: Response) => Promise<void>;
    getPhuong: (req: Request, res: Response) => Promise<void>;
}
declare const _default: AddressController;
export default _default;
