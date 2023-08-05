import { Column, Entity,JoinColumn,JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { UserModel } from "../Users/User.model"
import { ProductModel } from "../Products/Product.model"

@Entity({name: 'order'})
export class OrderModel{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: 'date',
        nullable: false,
    })
    dateOrder: Date

    @ManyToOne(()=> UserModel, user => user.id, {nullable: false})
    user: UserModel

    @OneToMany(()=> OrderProductModel, order => order.orderId)
    product: OrderProductModel[]

}

@Entity({name: 'order_product'})
export class OrderProductModel {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => OrderModel, order => order.product, {nullable: false})
    @JoinColumn({name: 'orderId'})
    orderId: OrderModel;

    @ManyToOne(() => ProductModel, {nullable: false})
    @JoinColumn({name: 'productId'})
    productId: ProductModel;

    @Column({
        type: "integer",
        nullable: false
    })
    quantity: number;

}
