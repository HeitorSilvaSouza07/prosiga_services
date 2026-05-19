import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User"; 

Entity('tblSubject')
export class Subject{

    @PrimaryGeneratedColumn()
    IdSub!: number

    @Column({type: 'varchar', length: 30})
    SubName!: string
    
    @ManyToOne(() => User, (user) => user.IdSub)
    users!: User[];
}
