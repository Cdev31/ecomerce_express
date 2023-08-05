import { OrderAdapater } from "../../db/Adapters/Orders/order.adapter";


export class OrderService {

    constructor(
        private readonly Service: OrderAdapater
    ){}

    async find(){
        return await this.Service.find()
    }

    async findById( id: string ){

    }

    async create( data ){
        return await this.Service.create( data )
    }

}