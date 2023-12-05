import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity'; // 指向你的实体类路径

@Module({
  imports: [
    TypeOrmModule.forRoot({
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "root",
        "password": "Apple@mysql",
        "database": "test",
        "synchronize": true,
        "entities": [
          "dist/**/*.entity{.ts,.js}"
        ],
        "logging": true
      }
    ),
    TypeOrmModule.forFeature([User]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule { }