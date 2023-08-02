import { Router , Request, Response, NextFunction } from 'express'

import { RoleNetwork } from './network'
import { validationSchema } from '../../middlewares/validate.handle'
import { CreateRoleSchema } from './dto/role.dto'

const roleRouter = Router()
const roleNetwork = new RoleNetwork()


roleRouter.get('/', 
async ( _: Request, res: Response )=>{

    const { response, message, status } = await roleNetwork.find()

    res.status(status).json({ message , response })
    
})

roleRouter.get('/:id', async ( req: Request, res: Response )=>{
    
    const { id }  = req.params

    const { response, status, message } = await roleNetwork.findById( id )

    res.status(status).json({ response, message })

})

roleRouter.post('/', 
validationSchema( CreateRoleSchema, 'body' ),
async ( req: Request, res: Response, _: NextFunction )=>{

    const { response, status, message } = await roleNetwork.create(req.body)

    res.status(status).json({ response, message })
}
)

roleRouter.patch('/:id', async ( req: Request, res: Response )=>{

    const body = req.body
    const { id } = req.params

    const { response, status, message } = await roleNetwork.update(id, body)

    res.status(status).json({ response, message })
})

roleRouter.delete('/:id', async ( req: Request, res: Response )=>{

    const { id } = req.params

    const { response, status, message } = await roleNetwork.delete( id ) 

    res.status(status).json({ response, message })
} )

export { roleRouter }