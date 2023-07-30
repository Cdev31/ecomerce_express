import { Request, Response } from 'express'
import { ProductService } from './service'
import { ProductAdapter } from '../../db/Adapters/Products/product.adapter'

const service = new ProductService(new ProductAdapter())

export class ProductNetwork {

    async find( req: Request, res: Response ){
        const response = await service.find()

        res.status(200).json(response)
    }

    async findById( req: Request, res: Response ){
        const { id }  = req.params

        const response = await service.findById(id)

        res.status(200).json(response)
    }

    async create( req: Request, res: Response ){
        const body = req.body

        const response = await service.create(body)

        res.status(200).json(response)
    }

    async update( req: Request, res: Response ){

        const body = req.body
        const { id } = req.params

        const response = await service.update(id,body)

        res.status(200).json(response)
    }

    async delete( req: Request, res: Response ){

        const { id } = req.params

        const response = await service.delete(id)

        res.status(200).json(response)
    }
}