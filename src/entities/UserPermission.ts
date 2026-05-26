import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
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
    @JoinColumn({ name: 'IdUser' })
    user!: User;

    @ManyToOne(() => Permission, (permission) => permission.userPermissions)
    @JoinColumn({ name: 'IdPer' })
    permission!: Permission;
}