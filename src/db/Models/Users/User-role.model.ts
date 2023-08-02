import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserModel } from "./User.model";

@Entity({name: 'user_roles'})
export class RoleModel {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({
        type: 'varchar',
        unique: true,
        nullable: false
    })
    name: string

    @Column({
        type: 'varchar',
        nullable: false
    })
    permissions: string

    @OneToMany(()=> UserModel, (user)=> user.id)
    users: UserModel[]
}