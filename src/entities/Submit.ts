import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Activitie } from "./Activitie";

@Entity('tblSubmit')
export class Submit{

    @PrimaryGeneratedColumn()
    IdSubmit!: number;

    @Column({type: 'int'})
    IdActivities!: number;

    @Column({type: 'nvarchar'})
    IdUser! : string;

    @Column({type: 'nvarchar', length: 255})
    SubSentId!: string;

    @ManyToOne(() => User, (user) => user.IdUser)
    user!: User;

    @ManyToOne(() => Activitie, (activitie) => activitie.IdActivities)
    activities!: Activitie[];

}