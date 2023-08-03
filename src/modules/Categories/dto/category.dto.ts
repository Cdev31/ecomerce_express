import { IsNotEmpty, IsString, Length } from "class-validator"



export class CreateCategorySchema{

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    name: string

    @IsString()
    @IsNotEmpty()
    @Length(20,40)
    description: string
    
}