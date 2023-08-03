import { IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator"


export class CreateImageSchema{

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    url: string

    @IsString()
    @IsOptional()
    description: string
    
}