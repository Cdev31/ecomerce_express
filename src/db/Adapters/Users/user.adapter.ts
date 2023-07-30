import { Repository } from "typeorm";
import { User } from "./user.interface";
import { UserModel } from "../../Models/user.model";
import { AppDataSource } from "../../config";


export class UserAdapter implements User {

    private readonly Repository: Repository<UserModel>

    constructor(){
        this.Repository = AppDataSource.getRepository(UserModel)
    }

    async find() {
        return await this.Repository.find()
    }
    
    async findById(id: string) {
        return await this.Repository.findBy({id:id})
    }

    async create(data: any) {

        const newUser = Object.assign(new UserModel(),data)
        return await this.Repository.save(newUser)

    }

    async update(id: string, data: any) {
        return await this.Repository.update(id, data)
    }

    async delete(id: string) {
        return await this.Repository.delete({id:id})
    }

    async findOne(searchTerm){
        const user = await this.Repository.findOne(searchTerm)
        return user
    }

}