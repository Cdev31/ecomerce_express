import { Router , Request, Response, NextFunction } from 'express'

import { UserNetwork } from './network'
import { hashPassword, validationSchema } from '../../middlewares/validate.handle'
import { CreateUserSchema } from './dto/user.dto'
import passport from 'passport'

const userRouter = Router()
const userNetwork = new UserNetwork()


userRouter.get('/', 
passport.authenticate('jwt', { session: false }),
async ( _: Request, res: Response )=>{

    const { response, message, status } = await userNetwork.find()

    res.status(status).json({ message , response })
    
})

userRouter.get('/:id', async ( req: Request, res: Response )=>{
    
    const { id }  = req.params

    const { response, status, message } = await userNetwork.findById( id )
    console.log(response[0].role)
    res.status(status).json({ response, message })

})

userRouter.post('/',
validationSchema(CreateUserSchema,'body'), hashPassword, 
async (newData, _: Request, res: Response, next: NextFunction )=>{

    const { response, status, message } = await userNetwork.create(newData)

    res.status(status).json({ response, message })
}
)

userRouter.patch('/:id', async ( req: Request, res: Response )=>{

    const body = req.body
    const { id } = req.params

    const { response, status, message } = await userNetwork.update(id, body)

    res.status(status).json({ response, message })
})

userRouter.delete('/:id', async ( req: Request, res: Response )=>{

    const { id } = req.params

    const { response, status, message } = await userNetwork.delete( id ) 

    res.status(status).json({ response, message })
} )

export { userRouter }