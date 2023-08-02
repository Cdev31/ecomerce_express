import { Product } from "./product.interface";
import { AppDataSource } from '../../config'
import { Repository } from "typeorm";
import { ProductModel } from "../../Models/Products/Product.model";


export class ProductAdapter implements Product {

    private readonly Repository: Repository<ProductModel>

    constructor(){
        this.Repository = AppDataSource.getRepository(ProductModel)
    }

    async find(){
        const products = await this.Repository.find()
        return products
    }

    async findById(id: string){
        const product = await this.Repository.findBy({id:id})
        return product
    }

    async create( data ){

        const newProduct = new ProductModel()

        Object.assign(newProduct, data)

        const product = await this.Repository.save(newProduct)
        
        return product
    }

    async update(id,data){
        const updateProduct = await this.Repository.update(id, data)
        return updateProduct
    }

    async delete(id){
        const deleteProduct = await this.Repository.delete({id:id})
        return true
    }

   
}