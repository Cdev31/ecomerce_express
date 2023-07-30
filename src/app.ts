import express, {Response} from 'express'

import { RouterApi } from './modules/index.routes'


export const createApp = ()=>{
    const app = express()

app.use( express.json() )

app.get('/', ( _, res: Response )=>{
    res.status(200).json({
        "Greeting": "Hello my RestApi"
    })
})

RouterApi(app)

return app

}