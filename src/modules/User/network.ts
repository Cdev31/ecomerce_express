import { NextFunction, Request, Response } from 'express'

import { UserAdapter } from "../../db/Adapters/Users/user.adapter"
import { UserService } from "./service"

const service = new UserService(new UserAdapter())

export class UserNetwork {
    response: unknown
    message: string
    status: number

    constructor(){
        this.response =  null
        this.message = 'Success',
        this.status = 200
    }

    async find(){
        const response = await service.find()

       return {
         response: response,
         status: this.status,
         message: this.message
       }
    }

    async findById( id:string){
       
        const isUser = await service.findById(id)

        if (isUser.length === 0)
            this.response = []
            this.message = `User with id: ${id} not found`
            this.status =  404
        

        return {
            message: this.message,
            response: isUser,
            status: this.status
        }
    }

    async create(newData){

        const response = await service.create(newData)

        return {
            message: this.message,
            response: response,
            status: this.status
        }
    }

    async update( id: string, body ){

        const response = await service.update(id,body)

        if( response.affected === 0) {
            this.message = 'Not updated',
            this.response = response.affected
            this.status = 400
        }

        return{
            message: this.message,
            response: response,
            status: this.status
        }
    }

    async delete( id: string ){

        
       const response = await service.delete(id)

       if( response.affected === 0 ){
          this.message = 'Not deleted',
          this.response = response.affected,
          this.status = 400
       }

       return {
          message: this.message,
          response: true,
          status: this.status
       }
    }
}