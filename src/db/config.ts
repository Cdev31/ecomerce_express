import { DataSource } from "typeorm";

import { config } from '../config/config.env'
import { ProductModel, UserModel, RoleModel, CategoryModel, ImageProductModel } from "./Models";

let options = {
    dbUrl: config.db_url
}

if(config.env === 'e2e'){
    options.dbUrl = config.db_e2e
}

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: options.dbUrl,
    synchronize: true,
    entities: [ ProductModel, UserModel, RoleModel, CategoryModel, ImageProductModel ]
})

if( config.env === 'dev'){
    AppDataSource.initialize()
}




