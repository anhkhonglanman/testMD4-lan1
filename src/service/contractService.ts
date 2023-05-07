import {AppDataSource} from "../data-source";
import {Contract} from "../entity/contract";
import {ContractStatus} from "../entity/contractStatus";

 class ContractService {
    private contractRepository;

    constructor() {
        this.contractRepository = AppDataSource.getRepository(Contract);
    }

    getContractByUserID = async (id) => {

        let contract = await this.contractRepository.find({
            relations: {
                house: true
            },
            where: {
                house: id
            }
        })
        return contract
    }

     // getContractByHouseId = async (houseId) => {
     //     let contract= await this.contractRepository.query(`select * from contract join house h on h.id = contract.houseId where houseId=${houseId}
     //    `)
     //     return contract
     // }

    getContractByHouseId = async (id) => {
        let contract = await this.contractRepository.find({
            relations: {
                house: true,
                contractStatus: true
            },
            where: {
                id: id
            }
        })
        return contract
    }
    showAll = async () => {
        let contract = await this.contractRepository.find();
        return contract
    }
     updateContractByClient = async (id, data) => {
         let contract = await this.contractRepository
             .createQueryBuilder()
             .update()
             .set({
                 startMonth: data.startMonth,
                 endMonth: data.endMonth,
             })
             .where("id = :id", { id: id })
             .execute();

         return contract;
     }
}

export default new ContractService();