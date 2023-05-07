import {Request, Response} from "express";
import contractService from "../service/contractService";


class ContractController {
    getContract = async (req: Request, res: Response) => {
        let id=req['decode'].id
        let contract = await contractService.getContractByUserID(id);
        console.log(contract)
        res.status(201).json(contract);
    }
    editContractByClient= async (req: Request, res: Response) => {
        let idContract = req.params.id;
        let contract = await contractService.updateContractByClient(parseInt(idContract),req.body)
        res.status(201).json(contract);
    }
    getAll=async (req: Request, res: Response)=>{
        let contract = await contractService.showAll();
        res.status(201).json(contract);
    }
}

export default new ContractController();