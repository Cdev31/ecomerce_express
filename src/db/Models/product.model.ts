import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'products'})
export class ProductModel {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: "varchar",
        length: 80,
        nullable: false
    })
    title: string

    @Column({
        type: "varchar",
        length: 140,
        nullable: false
    })
    description: string

    @Column()
    images: string

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2,
        nullable: false
    })
    price: number

    @Column({
        type: "integer",
        default: 5,
        nullable: false
    })
    stock: number

    @Column()
    category: string

    @Column({
        type: "enum",
        enum: ["X","XL"]
        
    })
    sizes: string[]

    @Column({
        type: "varchar",
        array: true
    })
    tags: string[]

}