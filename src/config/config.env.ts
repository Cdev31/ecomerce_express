import 'dotenv/config'
import { ConfigEnv } from './config.interface'
import { validationEnv } from './validation.env'

export const config: ConfigEnv = {
    env: process.env.NODE_ENV || 'dev',
    port: parseInt(process.env.PORT || '8080') , 
    db_url: process.env.DB_URL,
    db_e2e: process.env.DB_URL_E2E,
    jwtSecret: process.env.JWT_SECRET || '',
    googleSecret: process.env.SECRET_GOOGLE_CLIENT || '',
    googleClientId: process.env.GOOGLE_CLIENT_ID || ''


}

validationEnv(config)


