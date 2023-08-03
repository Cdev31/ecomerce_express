import { Application, Router } from "express";

import { productRouter } from "./Product/router";
import { userRouter } from "./User/router";
import { authRouter } from "./Auth/router";
import { fileRouter } from "./Files/router";
import { roleRouter } from "./Role/router";
import { categoryRouter } from "./Categories/router";


export const RouterApi = (app: Application)=>{
    const router = Router()
    router.use('/products', productRouter )
    router.use('/categories', categoryRouter )
    router.use('/users', userRouter )
    router.use('/role', roleRouter )
    router.use('/auth', authRouter )
    router.use('/file', fileRouter)
    app.use('/api/v1', router )
}