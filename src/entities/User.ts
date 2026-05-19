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

    @Column({ type: 'bit', default: false })
    UseAdmin!: boolean;

    @Column({ type: 'int', nullable: true })
    IdSub!: number;

    @OneToMany(() => Activitie, (activitie) => activitie.user)
    activities!: Activitie[];
}