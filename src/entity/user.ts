import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Role} from "./role";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id  : number;
    @Column({type: "varchar", length: 255})
    name: string;
    @Column()
    phoneNumber : number;
    @Column({type: "varchar", length: 255})
    address: string;
    @Column({type: "varchar", length: 255})
    username: string;
    @Column({type: "varchar", length: 255})
    password: string;
    @ManyToOne(()=> Role, (role)=> role.users)
    role : Role
}