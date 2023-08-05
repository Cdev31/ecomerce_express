import { DataSource } from "typeorm";

import { config } from '../config/config.env'
import { ProductModel, UserModel, RoleModel, CategoryModel, ImageProductModel } from "./Models";
import { OrderModel, OrderProductModel } from "./Models/Orders/order-model";

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
    entities: [ ProductModel, UserModel, RoleModel, CategoryModel, ImageProductModel, OrderModel, OrderProductModel]
})

if( config.env === 'dev'){
    AppDataSource.initialize()
}






