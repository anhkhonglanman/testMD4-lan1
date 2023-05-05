import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Quan} from "./quan";

@Entity()
export class City{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @OneToMany(()=>Quan,(quan)=>quan.city)
    quan:Quan[]
}