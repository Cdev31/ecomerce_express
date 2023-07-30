import { Router } from "express";
import { FileNetwork } from "./network";


const fileRouter = Router()
const fileNetwork = new FileNetwork()

fileRouter.post('/image_products', fileNetwork.createImage )

export { fileRouter }