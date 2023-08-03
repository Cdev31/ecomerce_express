import { Router } from 'express'

import { ProductNetwork } from './network'
import { validationSchema } from '../../middlewares/validate.handle'
import { CreateProductSchema } from './dtos/product.dto'

const productRouter = Router()
const productNetwork = new ProductNetwork()


productRouter.get('/', productNetwork.find )

productRouter.get('/:id', productNetwork.findById )

productRouter.post('/',
validationSchema(CreateProductSchema, 'body'),
productNetwork.create )

productRouter.patch('/:id', productNetwork.update )

productRouter.delete('/:id', productNetwork.delete )

export { productRouter }