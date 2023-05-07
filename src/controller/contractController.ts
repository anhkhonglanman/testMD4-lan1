import {Request, Response} from "express";
import contractService from "../service/contractService";


class ContractController {
    getContract = async (req: Request, res: Response) => {
        console.log(req['decode'])
        let id=req['decode']['id'];
        console.log(id)
        let contract = await contractService.getContractByUserID(id);
        res.status(201).json(contract);
    }

    getContractByHouseId = async (req: Request, res: Response) => {
        let id = parseInt(req.params.id)
        let contract = await contractService.getContractByHouseId(id)
        console.log(contract)
        res.status(201).json(contract)
    }
}

export default new ContractController();