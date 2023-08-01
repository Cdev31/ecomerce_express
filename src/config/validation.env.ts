import Joi, {} from "joi";
import { ConfigEnv } from "./config.interface";


const JoiValidationSchema = Joi.object({
    env: Joi.string().required(),
    port: Joi.number().integer().required(),
    db_url: Joi.string().required(),
    db_e2e: Joi.string().required(),
    jwtSecret: Joi.string().required(),
    googleSecret: Joi.string().required(),
    googleClientId: Joi.string().required()
})

export const validationEnv = ( loader: ConfigEnv )=>{
    const { error } = JoiValidationSchema.validate(loader)

    if( error ) throw new Error(`Environent: ${error?.message}`)
    
}