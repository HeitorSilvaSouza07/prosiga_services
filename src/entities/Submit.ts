import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Activitie } from "./Activitie";

@Entity('tblSubmit')
export class Submit{

    @PrimaryGeneratedColumn()
    IdSubmit!: number;

    @Column({type: 'int'})
    IdActivities!: number;

    @Column({type: 'int'})
    IdUser! : number;

    @Column({type: 'date'})
    SubSenteAt!: Date;

    @ManyToOne(() => User, (user) => user.submits)
    user!: User;

    @ManyToOne(() => Activitie, (activitie) => activitie.submits)
    activities!: Activitie;

}