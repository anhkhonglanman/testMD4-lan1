import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {City} from "./city";
import {Quan} from "./quan";
import {House} from "./house";

@Entity()
export class Phuong{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @ManyToOne(()=>Quan,(quan)=>quan.phuong)
    quan: Quan;
    @OneToMany(()=>House,(house)=>house.phuong)
    house:House[]

}