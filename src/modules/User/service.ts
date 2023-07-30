import { UserAdapter } from "../../db/Adapters/Users/user.adapter";


export class UserService{

    constructor(
        private readonly Service: UserAdapter
    ){}

    async find(){
        return await this.Service.find()
    }

    async findById(id:string){
        return await this.Service.findById(id)
    }

    async findByEmail(email:string){
        return await this.Service.findOne(email)
    }

    async create(body){
        return await this.Service.create(body)
    }

    async update(id:string,body){
        return await this.Service.update(id,body)
    }

    async delete(id:string){
        return await this.Service.delete(id)
    }
}