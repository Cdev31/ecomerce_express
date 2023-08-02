import { IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator"


export class CreateRoleSchema{

    @IsString()
    @IsNotEmpty()
    name: string

    @IsIn(['Read', 'Write', 'All'])
    @IsNotEmpty()
    permissions: string

}

export class UpdateRoleSchema {
    @IsString()
    @IsOptional()
    name: string

    @IsIn(['Read', 'Write', 'All'])
    @IsOptional()
    permissions: string
}