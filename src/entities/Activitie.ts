import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { User } from "./User";
import { Class } from "./Class";
import { Submit } from "./Submit";

@Entity('tblActivities')
export class Activitie{
    @PrimaryGeneratedColumn()
    IdActivities!: number;
    
    @Column({ type: 'int', nullable: false })
    IdUser!: number;

    @Column({ type: 'int', nullable: false })
    IdClass!: number;

    @Column({ type: 'nvarchar', length: 100, nullable: false })
    ActivitieType!: string;

    @Column({ type: 'nvarchar', length: 255, nullable: false })
    ActivitieTitle!: string;

    @Column({ type: 'nvarchar', length: 1500 })
    ActivitieDescription!: string;

    @Column({ type: 'datetime', nullable: false })
    ActivitieDataEnd!: Date;

    @Column({ type: 'datetime', nullable: false })
    ActivitieDataCreate!: Date;

    @Column({ type: 'datetime', nullable: false })
    CreatedAt!: Date;

    @ManyToOne(() => User, user => user.activities)
    @JoinColumn({ name: 'IdUser' })
    user!: User;

    @ManyToOne(() => Class, (classe) => classe.activities)
    @JoinColumn({ name: 'IdClass' })
    classe!: Class;

    @OneToMany(() => Submit, (submit) => submit.activities)
    submits!: Submit[];

}