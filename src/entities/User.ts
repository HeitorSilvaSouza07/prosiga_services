import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Activitie } from "./Activitie";

@Entity('tblUser')
export class User{
    @PrimaryGeneratedColumn()
    IdUser!: number;

    @Column({ type: 'nvarchar', length: 255 })
    UserName!: string;

    @Column({ type: 'nvarchar', length: 11 })
    UserCpf!: string;

    @Column({ type: 'nvarchar', length: 50 })
    UserType!: string;

    @Column({ type: 'nvarchar', length: 100 })
    UserPassword!: string;

    @OneToMany(() => Activitie, (activitie) => activitie.user)
    activities!: Activitie[];
}