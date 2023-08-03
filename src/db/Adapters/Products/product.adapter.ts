import { Product } from "./product.interface";
import { AppDataSource } from '../../config'
import { Repository } from "typeorm";
import { ProductModel } from "../../Models/Products/Product.model";
import { FileAdapter } from "../Files/file.adapter";

const fileService = new FileAdapter()

export class ProductAdapter implements Product {

    private readonly Repository: Repository<ProductModel>

    constructor(){
        this.Repository = AppDataSource.getRepository(ProductModel)
    }

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

        const product = await this.Repository.save(newProduct)
        
        await fileService.createImageProduct(product.id, data.images)

        return product
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