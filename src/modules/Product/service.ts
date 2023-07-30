import { ProductAdapter } from "../../db/Adapters/Products/product.adapter";

export class ProductService {

    constructor(
        private readonly Service: ProductAdapter
    ){}

    async find() {
        return await this.Service.find()
    }

    async findById(id) {
        return await this.Service.findById(id)
    }

    async create(data) {
        return await this.Service.create(data)
    }

    async update(id,data) {
        return await this.Service.update(id,data)
    }
    
    async delete(id) {
        return await this.Service.delete(id)
    }

}