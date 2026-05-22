import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('tblSubject')
export class Subject{

    @PrimaryGeneratedColumn()
    IdSub!: number;

    @Column({type: 'nvarchar', length: 100})
    SubName!: string;
}
