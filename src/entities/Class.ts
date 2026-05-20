import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm";
import { Activitie } from "./Activitie";

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

}