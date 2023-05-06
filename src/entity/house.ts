import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Image} from "./image";
import {Contract} from "./contract";
import {User} from "./user";
import {Phuong} from "./phuong";
import {Quan} from "./quan";
import {City} from "./city";
@Entity()
export class House{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    status:boolean;
    @Column()
    price:number
    @Column({type:"varchar",length:300})
    description: string;
    @OneToMany(()=> Image, (image) => image.house)
    image :Image[];
    @OneToMany(()=>Contract,(contract)=>contract.house)
    contract:Contract[];
    @ManyToOne(()=> User, (user)=> user.house)
    user : User;

    @ManyToOne(()=> Phuong, (phuong)=> phuong.house)
    phuong : Phuong;
    @ManyToOne(()=> Quan, (quan)=> quan.house)
    quan : Quan;
    @ManyToOne(()=> City, (city)=> city.house)
    city : City;
}