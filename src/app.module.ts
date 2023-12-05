import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database.module'; 
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [DatabaseModule,
    // TypeOrmModule.forRoot(),  // typeorm默认使用ormconfig.json这个配置文件。 也可以能过forRoot的参数中确认
  ],
  controllers: [AppController,UserController],
  providers: [AppService,UserService],
})
export class AppModule {}
