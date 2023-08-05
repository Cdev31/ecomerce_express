import { Product } from "./product.interface";
import { AppDataSource } from '../../config'
import {  QueryRunner, Repository } from "typeorm";
import { ProductModel } from "../../Models/Products/Product.model";
import { ImageProductModel } from "../../Models";


export class ProductAdapter implements Product {

    private readonly Repository: Repository<ProductModel> = AppDataSource.getRepository(ProductModel)
    private readonly Transaction: QueryRunner = AppDataSource.createQueryRunner()


    async find(){
        const products = await this.Repository.find({
            relations:{
                images: true
            }
        })
        return products
    }

    async findById(id: string){
        const product = await this.Repository.findBy({id:id})
        return product
    }

    async create( data ){
        
        const filterProduct = {
            title: data.title,
            description: data.description,
            price: data.price,
            stock: data.stock,
            category: data.category,
            sizes: data.sizes,
            tags: data.tags
        }
        const newProduct = new ProductModel()

        Object.assign(newProduct, filterProduct )

        await this.Transaction.connect()
        await this.Transaction.startTransaction()

        try{

            const product = await this.Transaction.manager.save(newProduct)

            for (const image of data.images){

                const newImage = new ImageProductModel()

                Object.assign( newImage,{
                    ...image,
                    product: product.id
                })

                await this.Transaction.manager.save(newImage)
            }

            await this.Transaction.commitTransaction()

        } catch(error){

            await this.Transaction.rollbackTransaction()

            throw error
        }

        return data
    }

    async update(id,data){
        const updateProduct = await this.Repository.update(id, data)
        return updateProduct
    }

    async delete(id){
        await this.Repository.delete({id:id})
        return true
    }

   
}