import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
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
    @JoinColumn({ name: 'IdUser' })
    user!: User;

    @ManyToOne(() => Activitie, (activitie) => activitie.submits)
    @JoinColumn({ name: 'IdActivities' })
    activities!: Activitie;

}