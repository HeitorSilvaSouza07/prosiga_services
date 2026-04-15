import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Activitie } from "./Activitie";

@Entity()
export class User{
    @PrimaryGeneratedColumn({type: 'number'})
    IdUser: number;

    @Column({type: 'string'})
    UserName: string;

    @Column({type: 'string'})
    UserCpf: string;

    @Column({type: 'string'})
    UserType: string;

    @OneToMany(() => Activitie, (activitie) => activitie.user)
    activities: Activitie[];
}