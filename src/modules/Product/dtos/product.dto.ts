import { ArrayMaxSize, IsArray, IsDecimal, IsInt, IsNotEmpty, IsPositive, IsString, Length, Min, ValidateNested } from "class-validator"
import { CreateImageSchema } from "../../Files/dto/images.dto"
import { Type } from "class-transformer"



export class CreateProductSchema{
    
    @IsString()
    @IsNotEmpty()
    @Length(40,60)
    title: string

    @IsString()
    @IsNotEmpty()
    @Length(90,120)
    description: string

    @ValidateNested()
    @Type(()=> CreateImageSchema)
    @IsNotEmpty()
    images: CreateImageSchema[]

    @IsDecimal()
    @IsPositive()
    @IsNotEmpty()
    price: number

    @IsInt()
    @IsPositive()
    @Min(5)
    @IsNotEmpty()
    stock: number

    @IsString()
    @IsNotEmpty()
    category: string

    @IsArray()
    @ArrayMaxSize(5)
    sizes: string[]

    @IsArray()
    @ArrayMaxSize(6)
    tags: string[]

}