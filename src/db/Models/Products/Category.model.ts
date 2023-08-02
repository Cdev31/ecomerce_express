import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity({name: 'categories'})
export class CategoryModel {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: 'varchar',
        nullable: false,
        unique: true
    })
    name: string

    @Column({
        type: 'varchar',
        length: 60,
        nullable: false
    })
    description: string

}