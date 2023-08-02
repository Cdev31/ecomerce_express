import { Router, Request, Response, NextFunction } from 'express'

import { AuthNetwork } from './network'
import passport from 'passport'
import { validationSchema } from '../../middlewares/validate.handle'
import { LoginUserSchema } from './dto/auth.dto'

const authRouter = Router()
const authNetwork = new AuthNetwork()


authRouter.post('/register', async ( req: Request, res: Response )=>{

})

authRouter.post('/login', 
validationSchema(LoginUserSchema, 'body'),
passport.authenticate('local', {session: false}), 
async (req: Request, res: Response)=>{
    const response = await authNetwork.login(req.user)

    res.status(200).json({
        message: 'Success',
        response
    })
})

//authRouter.post('/google/login', )

authRouter.get('/google/register',
passport.authenticate('sign-up-google', { scope: ['profile', 'email'],session:false }))


export { authRouter }