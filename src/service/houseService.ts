import {AppDataSource} from "../data-source";
import {House} from "../entity/house";
import bcrypt from "bcrypt";
import {User} from "../entity/user";
import jwt from "jsonwebtoken";
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
     createHouse = async (house) => {

         // let newHouse = new House();
         // newHouse.name=user.name;
         // newUser.phoneNumber = user.phoneNumber;
         // newUser.address = user.address;
         // newUser.username = user.username;
         // newUser.password = password;
         // newUser.role = parseInt(user.role)
         // await this.userRepository.save(newUser);
         // return newUser

     }


 }

 export default new HouseService()
