import { ExtractJwt, Strategy } from 'passport-jwt'
import { config } from '../../config/config.env'

export const jwtStrategy = new Strategy({

    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret

}, async ( payload, done )=>{

    return done(null, payload)
    
})
