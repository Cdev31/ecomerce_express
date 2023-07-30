import {Express} from 'express'
import { createApp } from '../src/app'
import request, {SuperTest, Test} from 'supertest'
import { Server } from 'http';
import { AppDataSource } from '../src/db/config';
import { DataSource} from 'typeorm';
import { ProductModel } from '../src/db/Models/product.model';


describe('test e2e endpoind api/v1/products', () => {

    let app: Express 
    let api: SuperTest<Test> 
    let server: Server 
    let connectionDB: DataSource
    let repository = AppDataSource.getRepository(ProductModel)
    const path = '/api/v1/products'

    beforeAll(async ()=>{
        app = createApp()
        server = app.listen(9090)
        api = request(app)
        connectionDB = await AppDataSource.initialize()
    })

    describe('Get by /products', () => {

        test('GET /products "return a product list and 200 status code" ', async () => {
            
            const getAllproducts = await repository.find()
            
            const { statusCode, body } = await api.get( path )
            expect( getAllproducts ).toEqual( body )
            expect( statusCode ).toEqual( 200 )
        });

        // test('GET /products:id "return a one product and 200 status code" ', async () => {

        //     const { statusCode } = await api.get( path )
        //     expect( statusCode ).toEqual( 200 )
        // });

    });

    // test('POST /products', async () => {
    //     const response = await api.get(path)
    //     expect(response?.statusCode).toEqual(200)
    // });

    // test('UPDATE /products', async () => {
    //     const response = await api.get(path)
    //     expect(response?.statusCode).toEqual(200)
    // });

    // test('DELETE /products', async () => {
    //     const response = await api.get(path)
    //     expect(response?.statusCode).toEqual(200)
    // });

    afterAll(()=>{
        server.close()
        connectionDB.close()
    })

});