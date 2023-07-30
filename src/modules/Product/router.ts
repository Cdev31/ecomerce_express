import { Router } from 'express'

import { ProductNetwork } from './network'

const productRouter = Router()
const productNetwork = new ProductNetwork()


productRouter.get('/', productNetwork.find )

productRouter.get('/:id', productNetwork.findById )

productRouter.post('/', productNetwork.create )

productRouter.patch('/:id', productNetwork.update )

productRouter.delete('/:id', productNetwork.delete )

export { productRouter }