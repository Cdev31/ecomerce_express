import { RoleAdapter } from "../../db/Adapters/Role/role.adapter"


export class RoleService{

    constructor(
        private readonly Service: RoleAdapter
    ){}

    async find(){
        return await this.Service.find()
    }

    async findById( id:string ){
        return await this.Service.findById( id )
    }

    async create( data ){
        return await this.Service.create( data )   
    }

    async update( id:string, data ){
        return await this.Service.update( id, data )
    }

    async delete( id:string ){
        return await this.Service.delete( id )
    }

}