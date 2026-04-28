import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Activitie } from "./Activitie";

@Entity('tblClass')
export class Class{
    @PrimaryGeneratedColumn({type: 'number'})
    IdClass!: number;

    @Column({type: 'number'})
    ClassPeriod!: number;

    @Column({type: 'varchar'})
    ClassCurso!: string;
    
    @OneToMany (() => Activitie, (activitie) => activitie.classe)
    activities!: Activitie[];

}