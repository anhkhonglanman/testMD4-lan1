import {AppDataSource} from "../data-source";
import {User} from "../entity/user";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import {SECRET} from "../middleware/auth";
import {City} from "../entity/city";
import {Phuong} from "../entity/phuong";
import {Quan} from "../entity/quan";

class AddressService {
    private cityRepository;
    private quanRepository;
    private phuongRepository;

    constructor() {
        this.cityRepository = AppDataSource.getRepository(City)
        this.quanRepository = AppDataSource.getRepository(Quan)
        this.phuongRepository = AppDataSource.getRepository(Phuong)
    }


    getCity = async () => {
        return await this.cityRepository.find()
    }
}
export default new AddressService();