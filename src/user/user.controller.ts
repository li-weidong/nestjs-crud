// user.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { ApiResponse } from 'src/commom/api-response.model';
import { promises } from 'dns';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('/query')
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get('queryById')
    async findOne(@Query('id') id: string): Promise<ApiResponse> {
        try {
            const obj = await this.userService.findOne(+id);;

            if (!obj) {
                throw ApiResponse.error('User not found');
            }
            console.log(obj)
            return ApiResponse.successWithData(obj);
        } catch (error) {
            // Handle other errors, log them, or return a different response
            throw ApiResponse.error('Internal server error');
        }
    }

    @Post('/create')
    async create(@Body() user: User): Promise<ApiResponse> {
        try {
            const obj =  await this.userService.create(user);;
      
            if (!obj) {
              throw ApiResponse.error('User not found');
            }
            console.log(obj)
            return ApiResponse.successWithData(obj);
          } catch (error) {
            // Handle other errors, log them, or return a different response
            throw ApiResponse.error('Internal server error'); 
          }
        return this.userService.create(user);
    }

    @Post('update')
    update(@Body('id') id: string, @Body() updateUser: User): Promise<User> {
        return this.userService.update(+id, updateUser);
    }

    @Post('delete')
    remove(@Body('id') id: string): Promise<void> {
        return this.userService.remove(+id);
    }
}
