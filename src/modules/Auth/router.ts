import { Router } from 'express'

import { AuthNetwork } from './network'

const authRouter = Router()
const authNetwork = new AuthNetwork()

authRouter.post('/login', authNetwork.login )

export { authRouter }