import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Activitie } from "./Activitie";
import { Class } from "./Class";
import { Submit } from "./Submit";
import { UserPermission } from "./UserPermission";

@Entity('tblUser')
export class User{
    @PrimaryGeneratedColumn()
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

    @Column({ type: 'int', nullable: true })
    IdSub!: number;
    
    @OneToMany(() => Class, (classe) => classe.user)
    classes!: Class[];

    @OneToMany(() => Activitie, (activitie) => activitie.user)
    activities!: Activitie[];

    @OneToMany(() => Submit, (submit) => submit.user)
    submits!: Submit[];

    @OneToMany(() => UserPermission, (userPermission) => userPermission.user)
    userPermissions!: UserPermission[];
}