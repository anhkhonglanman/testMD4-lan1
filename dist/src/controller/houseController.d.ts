import { Request, Response } from "express";
declare class HouseController {
    showAllHouse: (req: Request, res: Response) => Promise<void>;
    createHouse: (req: Request, res: Response) => Promise<void>;
    editHouseById: (req: Request, res: Response) => Promise<void>;
    showHouseById: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
}
declare const _default: HouseController;
export default _default;
