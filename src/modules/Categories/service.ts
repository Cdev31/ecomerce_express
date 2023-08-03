import { CategoryAdapater } from "../../db/Adapters/Category/category.adapter";


export class CategoryService{

    constructor(
        private readonly Service: CategoryAdapater
    ){}

    async find(){
        return await this.Service.find()
    }

    async findById( id: string ){
        return await this.Service.findById( id )
    }

    async create( data ){
        return await this.Service.create( data )
    }

}