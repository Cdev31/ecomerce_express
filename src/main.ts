
import { config } from './config/config.env'
import { createApp }  from './app'

const app = createApp()

app.listen(config.port,()=>{
    console.log('Api in port: ', config.port)
})