import { Entity, PrimaryGeneratedColumn, Column, Collection, OneToMany } from "typeorm";
import { Activitie } from "./Activitie";

@Entity('tblClass')
export class Class{
    @PrimaryGeneratedColumn()
    IdClass: number;type: 'number'

    @Column({type: 'number'})
    ClassPeriod: number;

    @Column({type: 'varchar'})
    ClassCurso: string;
    
    @OneToMany (() => Activitie, (activitie) => activitie.classe)
    activities: Activitie[];

}