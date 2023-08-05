import { Repository } from "typeorm";
import { CategoryModel } from "../../Models";
import { AppDataSource } from "../../config";


export class CategoryAdapater{

    private readonly Repository: Repository<CategoryModel> = AppDataSource.getRepository(CategoryModel)

    async find(){
        return await this.Repository.find()
    }

    async findById( id: string ){
        return await this.Repository.findBy({ id })
    }

    async create( data ){
        const newCategory  = Object.assign( new CategoryModel(), data)
        return await this.Repository.save(newCategory)
        
    }
}