import { Strategy } from 'passport-local'


import { UserAdapter } from "../../db/Adapters/Users/user.adapter"
import { UserService } from "../../modules/User/service"
import { verifyPassword } from '../hashing-password'

const service = new UserService(new UserAdapter())


export const localStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
}, async ( email, password, done )=>{
    
    try {
        const user = await service.findByEmail(email)

        if( user.length === 0 ) done(null, false)
        
        const isPassword = await verifyPassword(password, user[0].password)

        if( isPassword !== true )  done(null, false)

        done( null, user )

    } catch (error) {
        done(error,false)
    }
})