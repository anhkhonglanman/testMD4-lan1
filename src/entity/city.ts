import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Quan} from "./quan";
import {House} from "./house";

@Entity()
export class City{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @OneToMany(()=>Quan,(quan)=>quan.city)
    quan:Quan[];
    @OneToMany(()=>House,(house)=>house.city)
    house:House[]
}