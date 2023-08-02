import { Request, Response } from 'express'

import { UserAdapter } from "../../db/Adapters/Users/user.adapter"
import { UserService } from "../User/service"
import { createJwt } from '../../utils/generate-jwt'
import { config } from '../../config/config.env'

const service = new UserService(new UserAdapter())

export class AuthNetwork{

    constructor(){

    }

    async register( req:Request, res: Response ){
        
    }

    async login( user ){
       const payload = {
        userId: user.id,
        role: user[0].role.name,
        permissions: user[0].role.permissions
       }
       const token = await createJwt(payload, config.jwtSecret)

       return token
    }

    
}