import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Permission } from "./Permission";

@Entity('tblUserPermission')
export class UserPermission{

    @PrimaryGeneratedColumn({type: 'int'})
    IdUp!: number;

    @Column({type: 'int'})
    IdUser!: number;

    @Column({type: 'int'})
    IdPer!: number;

    @ManyToOne(() => User, (user) => user.userPermissions)
    user!: User;

    @ManyToOne(() => Permission, (permission) => permission.userPermissions)
    permission!: Permission;
}