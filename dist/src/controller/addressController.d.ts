import { Request, Response } from "express";
declare class AddressController {
    getCity: (req: Request, res: Response) => Promise<void>;
    showUser: (req: Request, res: Response) => Promise<any>;
    editUser: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
}
declare const _default: AddressController;
export default _default;
