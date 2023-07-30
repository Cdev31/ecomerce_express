import { Request, Response,NextFunction } from 'express'
import { validate, ValidationError } from 'class-validator'
import { hashingPassword } from '../utils/hashing-password'

export const validationSchema = (Schema, property)=>{
    return async (req:Request, res: Response, next: NextFunction)=>{

        const data = req[property]

        const schema = new Schema()
        Object.assign( schema, data )

        const error: ValidationError[] = await validate(schema)

        if ( error.length > 0){
            const erros = error.map( e => e.constraints )
            res.status(400).json(erros)
        }

        next()
    }
}

export const hashPassword = async  ( req:Request, _:Response, next: NextFunction)=>{

    const data = req.body 
   
    const newData = {
        ...data,
        password: await hashingPassword(data.password)
    }
    
    next(newData)

}