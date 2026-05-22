import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Activitie } from "./Activitie";
import { User } from "./User";

@Entity('tblClass')
export class Class{
    @PrimaryGeneratedColumn()
    IdClass!: number;

    @Column({ type: 'int' })
    ClassPeriod!: number;

    @Column({ type: 'nvarchar', length: 255 })
    ClassCurso!: string;

    @Column({type: 'nvarchar', length: 255})
    IdUser!: string;     

    @OneToMany (() => Activitie, (activitie) => activitie.classe)
    activities!: Activitie[];

    @ManyToOne(() => User, (user) => user.classes)
    user!: User;

}