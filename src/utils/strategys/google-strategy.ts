import GoogleStrategy from 'passport-google-oauth'
import { config } from '../../config/config.env'

import { UserAdapter } from "../../db/Adapters/Users/user.adapter"
import { UserService } from "../../modules/User/service"

const service = new UserService(new UserAdapter())

const options = {
    clientID: config.googleClientId,
    clientSecret: config.googleSecret,
    callbackURL: 'http://localhost:8080/api/v1/auth/google/register',
}

export const googleStrategy = new GoogleStrategy.OAuth2Strategy(options, async ( accessToken, refreshToken, profile, done )=>{
    const existsUser = await service.findByEmail(profile.emails?.[0]?.value ?? '')
    
    if( existsUser.length > 0 ) {
        done(null, false)
    }
    else{
        let newUser = {
            firstName: profile.name?.givenName,
            lastName: profile.name?.familyName,
            email: profile.emails?.[0]?.value,
            google: true
        }
    
        await service.create(newUser)
    
        done(null,profile)
    }
  
})
