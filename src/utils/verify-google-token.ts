import { config } from '../config/config.env'
import { OAuth2Client } from 'google-auth-library'

const client = new OAuth2Client( config.googleClientId )

export async function verifyGoogleToken(token:string){
    
   const payload = await client.getTokenInfo(token)

   return payload
}