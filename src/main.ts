import cors from 'cors'

import { config } from './config/config.env'
import { createApp }  from './app'
import './db/config'
import './utils/strategys'

const app = createApp()
app.use( cors() )


app.listen(config.port,()=>{
    console.log('Api in port: ', config.port)
})