import { sign, verify } from 'jsonwebtoken'


export const createJwt = ( payload, secret ): string => {
    return sign( payload, secret ) 
}

export const verifyJwt = async ( token, secret ) => {
    return verify(token,secret)
}