import { Repository } from "typeorm";
import { RoleModel } from "../../Models";
import { AppDataSource } from "../../config";
import { Role } from "./role.interface";


export class RoleAdapter implements Role {

    private readonly Repository: Repository<RoleModel>

    constructor(){
        this.Repository = AppDataSource.getRepository(RoleModel)
    }

    async find(){
        return  await this.Repository.find()
    }

    async findById(id: string) {
        return await this.Repository.findBy({id:id})
    }

    async create(data: any) {
        const newRole = Object.assign( new RoleModel(), data )
        return await this.Repository.save(newRole)
        
    }
    async update(id: string, data: any) {
        return await this.Repository.update( id, data)
    }
    async delete(id: string) {
        return await this.Repository.delete(id)
    }

}