import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {City} from "./city";
import {Phuong} from "./phuong";

@Entity()
export class Quan{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @ManyToOne(()=>City,(city)=>city.quan)
    city: City;
    @OneToMany(()=>Phuong,(phuong)=>phuong.quan)
    phuong:Phuong[]


}