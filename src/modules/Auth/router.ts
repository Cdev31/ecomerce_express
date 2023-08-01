import { Router, Request, Response } from 'express'

import { AuthNetwork } from './network'
import passport from 'passport'

const authRouter = Router()
const authNetwork = new AuthNetwork()


authRouter.post('/register', async ( req: Request, res: Response )=>{

})

authRouter.post('/login', 
passport.authenticate('local', {session: false}) )

//authRouter.post('/google/login', )

authRouter.get('/google/register',
passport.authenticate('sign-up-google', { scope: ['profile', 'email'],session:false }))


export { authRouter }