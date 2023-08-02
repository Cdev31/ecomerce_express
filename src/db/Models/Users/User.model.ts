import { Column, Entity, JoinColumn, ManyToOne,  PrimaryGeneratedColumn } from "typeorm";
import { RoleModel } from "./User-role.model";


@Entity({name: 'users'})
export class UserModel {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        name: 'first_name',
        type: 'varchar',
        length: 15,
        nullable: false
    })
    firstName: string

    @Column({
        name: 'last_name',
        type: 'varchar',
        length: 15,
        nullable: false
    })
    lastName: string

    @Column({
        type: 'varchar',
        nullable: true
    })
    picture: string

    @Column({
        type: 'varchar',
        nullable: false,
        unique: true
    })
    email: string

    @Column({
        type: 'varchar',
        nullable: true
    })
    password: string

    @ManyToOne(()=> RoleModel, { nullable: false})
    @JoinColumn({name: 'role'})
    role: RoleModel

    @Column({
        type: 'boolean',
        default: true,
        nullable: false
    })
    active: boolean

    @Column({
        type: 'varchar',
        nullable: true
    })
    recoveryToken: string

    @Column({
        type: 'boolean',
        default: false
    })
    google: boolean

    @Column({
        type: 'boolean',
        default: false
    })
    facebook: boolean

}