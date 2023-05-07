import {AppDataSource} from "../data-source";
import {Contract} from "../entity/contract";

class ContractService {
    private contractRepository;
    constructor() {
        this.contractRepository = AppDataSource.getRepository(Contract)
    }

    getContractByUserID = async (id) => {
       let contract= await this.contractRepository.find({
            relations: {
                house: true
            },
            where: {
                house : id
            }
        })
        return contract
    }
    getContractByHouseId = async (houseId) => {
        let contract= await this.contractRepository.query(`select * from contract join house h on h.id = contract.houseId where houseId=${houseId}
        `)
        return contract
    }
    // getContractByHouseId = async (id) => {
    //     let contract= await this.contractRepository.createQueryBuilder('contract')
    //         .leftJoinAndSelect("contract.house", "house")
    //         .where("contract.id = :id", { id: "id" })
    //         .getOne()
    //     return contract
    // }
}

export default new ContractService();