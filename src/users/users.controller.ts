import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user dto';
import { User } from './user.models';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService:UsersService){}

    @ApiOperation({summary: 'Создание пользователя'})
    @Post()
    create(@Body() userDto:CreateUserDto){
        console.log(userDto)
        return this.userService.createUser(userDto)
    }

    @ApiOperation({summary: 'Получить всех пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll(){
        return this.userService.getAllUser()
    }

}
