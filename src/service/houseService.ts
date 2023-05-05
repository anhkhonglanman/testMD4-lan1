import {AppDataSource} from "../data-source";
import {House} from "../entity/house";
 class HouseService {
    private  houseRepository;
    constructor() {
        this.houseRepository=AppDataSource.getRepository(House);
    }
     findAllHouse = async () => {

      let houses = await this.houseRepository.find()
         console.log(houses)
         return houses
     }

 }

 export default new HouseService()
