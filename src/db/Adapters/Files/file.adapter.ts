import { Repository } from "typeorm";
import { Files } from "./file.interface";
import { ImageProductModel } from "../../Models";
import { AppDataSource } from "../../config";



export class FileAdapter implements Files{

    private readonly Repository: Repository<ImageProductModel> = AppDataSource.getRepository(ImageProductModel)


    async createImageProduct( productId: string ,data:any ) {
       let images: any = []

       for (const image of data){

            const newImage = new ImageProductModel()
          
            Object.assign( newImage , {
                ...image,
                product: productId
            })
            console.log(newImage)
            const savedImages = await this.Repository.save(newImage)
            images.push(savedImages)
        }
        return images
    }
    
}