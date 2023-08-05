import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ImageProductModel } from "./Image-product.model";
import { CategoryModel } from "./Category.model";


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

    @OneToMany(()=> ImageProductModel, image => image.product)
    images: ImageProductModel[]

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

    @OneToOne(()=> CategoryModel)
    @JoinColumn()
    category: CategoryModel

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