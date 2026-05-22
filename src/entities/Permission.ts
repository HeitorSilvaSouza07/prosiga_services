import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from "typeorm";
import { UserPermission } from "./UserPermission";

@Entity('tblPermissios')
export class Permission{

    @PrimaryGeneratedColumn({type: 'int'})
    IdPer!: number;

    @Column({type: 'nvarchar', length: 255})
    PerKey!: string;

    @Column({type: 'nvarchar', length: 1500})
    PerDesc!: string;

    @OneToMany(() => UserPermission, (userPermission) => userPermission.permission)
    userPermissions!: UserPermission[];
}