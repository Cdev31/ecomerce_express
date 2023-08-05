import { ProductModel } from "../../Models";
import { OrderModel, OrderProductModel } from "../../Models/Orders/order-model";
import { AppDataSource } from "../../config";


export class OrderAdapater{

    private readonly Transaction = AppDataSource.createQueryRunner()
    private readonly Repository = AppDataSource.getRepository( OrderModel )


    async find(){
        const orders = await this.Repository.find({
            relations: {
                product: true
            }
        })

        return orders
    }

    async create( data ){

        const newOrder = new OrderModel()
        Object.assign( newOrder, { dateOrder: new Date(), user: data.user } )

        await this.Transaction.connect()
        await this.Transaction.startTransaction()
        
         try {

            const order = await this.Transaction.manager.save(newOrder)

            for ( const product of data.products){

                const productOrder = new OrderProductModel()
                Object.assign( productOrder, { 
                    orderId: order.id,
                    productId: product.productId,
                    quantity: product.quantity
                 })

                const pOrder =  await this.Transaction.manager.save(productOrder)

                const stockProduct = await this.Transaction.query(`SELECT * FROM products WHERE id='${pOrder.productId}'`)
                
                const newStock = stockProduct[0].stock - pOrder.quantity

                await this.Transaction.manager.update( ProductModel,  pOrder.productId,  { stock: newStock })
                
            }

            await this.Transaction.commitTransaction()

         } catch (error) {

            await this.Transaction.rollbackTransaction()

            throw error
            
         }

    }
    
}