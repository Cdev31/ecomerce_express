import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { ProductModel } from "./Product.model"

@Entity({name: 'product_images'})
export class ImageProductModel {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: 'varchar',
        nullable: false
    })
    url: string

    @ManyToOne(()=> ProductModel, (product) => product.id)
    belogingProduct: ProductModel

}