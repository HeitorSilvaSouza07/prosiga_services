import { Entity, PrimaryGeneratedColumn, Column, Collection, ManyToOne } from "typeorm";
import { User } from "./User";
import { Class  } from "./Class";

@Entity('tblActivities')
export class Activitie{
    @PrimaryGeneratedColumn({type: 'number'})
    IdActivities: number;
    
    @Column({type: 'number', nullable: false})
    IdUser: number;

    @Column({type: 'number', nullable: false})
    IdClass: number;

    @Column({type: 'string', nullable: false})
    ActivitieType: string;

    @Column({type: 'string'})
    ActivitieDescription: string;

    @Column({type: 'date', nullable: false})
    AtivitieDataEnd: Date;

    @Column({type: 'date', nullable: false})
    ActivitieDataCreate: Date;

    @Column({type: 'date', nullable: false})
    CreatedAt: Date;

    @ManyToOne(() => User, user => user.activities )
    user: User;

    @ManyToOne(() => Class, (classe) => classe.activities)
    classe: Class;

}