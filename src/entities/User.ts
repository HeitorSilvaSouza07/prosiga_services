import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Activitie } from "./Activitie";
import { Class } from "./Class";
import { Submit } from "./Submit";
import { UserPermission } from "./UserPermission";
import { UserSubject } from "./UserSubject";

@Entity('tblUser')
export class User{
    @PrimaryGeneratedColumn({type: 'int'})
    IdUser!: number;

    @Column({ type: 'nvarchar', length: 255 })
    UserName!: string;

    @Column({ type: 'nvarchar', length: 11 })
    UserCpf!: string;

    @Column({ type: 'nvarchar', length: 50 })
    UserType!: string;

    @Column({ type: 'nvarchar', length: 100 })
    UserPassword!: string;

    @Column({ type: 'bit', default: false })
    UseAdmin!: boolean;

    @OneToMany(() => Class, (classe) => classe.user)
    classes!: Class[];

    @OneToMany(() => Activitie, (activitie) => activitie.user)
    activities!: Activitie[];

    @OneToMany(() => Submit, (submit) => submit.user)
    submits!: Submit[];

    @OneToMany(() => UserPermission, (userPermission) => userPermission.user)
    userPermissions!: UserPermission[];

    @OneToMany(() => UserSubject, (userSubject) => userSubject.user)
    userSubjects!: UserSubject[];
}