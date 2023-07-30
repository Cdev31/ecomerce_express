import { IsEmail, IsNotEmpty, IsString, Length, Matches } from "class-validator"


export class CreateUserSchema {

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    firstName: string

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    lastName: string

    @IsString()
    @IsNotEmpty()
    picture: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-zA-Z0-9]{8,}$/)
    password: string

}