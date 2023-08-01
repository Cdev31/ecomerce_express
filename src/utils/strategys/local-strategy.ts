import { Strategy } from 'passport-local'


import { UserAdapter } from "../../db/Adapters/Users/user.adapter"
import { UserService } from "../../modules/User/service"
import { verifyPassword } from '../hashing-password'

const service = new UserService(new UserAdapter())


export const localStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
}, async ( password, email, done )=>{
    try {
        const user = await service.findByEmail(email)

        if( user.length === 0 ) done('Unauthorized', false)

        const isPassword = await verifyPassword(password, user[0].password)

        if( isPassword !== true ) done('Unauthorized', false)

        done( null, user )

    } catch (error) {
        done(error,false)
    }
})