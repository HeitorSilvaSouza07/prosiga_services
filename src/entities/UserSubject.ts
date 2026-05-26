import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Subject } from "./Subject";

@Entity('tblUserSubject')
export class UserSubject{

    @PrimaryGeneratedColumn({ type: 'int' })
    IdSubUse!: number;

    @Column({ type: 'int' })
    IdUser!: number;

    @Column({ type: 'int' })
    IdSub!: number;

    @ManyToOne(() => User, (user) => user.userSubjects)
    @JoinColumn({ name: 'IdUser' })
    user!: User;

    @ManyToOne(() => Subject, (subject) => subject.userSubjects)
    @JoinColumn({ name: 'IdSub' })
    subject!: Subject;

}
