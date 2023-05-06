import { Request, Response } from "express";
declare class HouseController {
    showAllHouse: (req: Request, res: Response) => Promise<void>;
    searchHouse: (req: Request, res: Response) => Promise<void>;
}
declare const _default: HouseController;
export default _default;
