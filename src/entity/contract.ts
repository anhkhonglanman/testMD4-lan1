import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

import {House} from "./house";
import {User} from "./user";

@Entity()
export class Contract{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    price:number;
    @Column()
    startMonth:Date;
    @Column()
    endMonth:Date;
    @Column()
    cost:number;
    @ManyToOne(()=> House, (house)=> house.contract)
    house : House;
    @ManyToOne(()=> User, (user)=> user.contract)
    user : User;
}