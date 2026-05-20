import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity('tblPermission')
export class Permission{

    @PrimaryGeneratedColumn()
    IdPer!: number;

    @Column({type: 'nvarchar', length: 255})
    PerKey!: number;

    @Column({type: 'nvarchar', length: 1500})
    PerDesc!: string

}