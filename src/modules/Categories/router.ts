import { Router, Request, Response } from "express";
import { CategoryService } from "./service";
import { CategoryAdapater } from "../../db/Adapters/Category/category.adapter";
import { validationSchema } from "../../middlewares/validate.handle";
import { CreateCategorySchema } from "./dto/category.dto";


const categoryService = new CategoryService( new CategoryAdapater())
export const categoryRouter = Router()

categoryRouter.get('/', async ( _: Request,res: Response )=>{

    const response = await categoryService.find()

    res.status(200).json(response)

})

categoryRouter.get('/:id', async ( req: Request,res: Response )=>{

    const { id }  = req.params

    const response = await categoryService.findById( id )

    res.status(200).json(response)

})

categoryRouter.post('/',
validationSchema( CreateCategorySchema, 'body'),
async ( req: Request,res: Response )=>{
    
    const body = await categoryService.create( req.body )

    res.status(201).json( body )

})