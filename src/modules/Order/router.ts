import { Router, Request, Response } from "express";
import { OrderService } from "./service";
import { OrderAdapater } from "../../db/Adapters/Orders/order.adapter";

const orderService = new OrderService( new OrderAdapater() )
export const orderRouter = Router()

orderRouter.get('/', async (_: Request, res: Response)=> {
    const response = await orderService.find()
    res.status(200).json(response)
})

orderRouter.get('/:id', async (req: Request, res: Response)=> {

})

orderRouter.post('/', async (req: Request, res: Response)=> {
    const body = req.body

    const response = await orderService.create( body )

    res.status(201).json(response)

})