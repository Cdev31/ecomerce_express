import { Router } from 'express'

import { UserNetwork } from './network'
import { hashPassword, validationSchema } from '../../middlewares/validate.handle'
import { CreateUserSchema } from './dto/user.dto'

const userRouter = Router()
const userNetwork = new UserNetwork()


userRouter.get('/', userNetwork.find )

userRouter.get('/:id', userNetwork.findById )

userRouter.post('/',
validationSchema(CreateUserSchema,'body'), hashPassword, 
userNetwork.create )

userRouter.patch('/:id', userNetwork.update )

userRouter.delete('/:id', userNetwork.delete )

export { userRouter }