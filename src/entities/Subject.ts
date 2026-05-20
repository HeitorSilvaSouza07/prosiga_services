import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User"; 

@Entity('tblSubject')
export class Subject{

    @PrimaryGeneratedColumn()
    IdSub!: number

    @Column({type: 'nvarchar', length: 100})
    SubName!: string
    
    @ManyToOne(() => User, (user) => user.IdSub)
    users!: User[];
}
