import { Router } from 'express'

import { AuthNetwork } from './network'
import passport, { session } from 'passport'

const authRouter = Router()
const authNetwork = new AuthNetwork()

authRouter.post('/login', authNetwork.login )

//authRouter.post('/google/login', )

authRouter.get('/google/register',
passport.authenticate('sign-up-google', { scope: ['profile', 'email'],session:false }))


export { authRouter }