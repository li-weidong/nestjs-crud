import { UserService } from './user.service';
import { User } from './user.entity';
import { ApiResponse } from 'src/commom/api-response.model';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<ApiResponse>;
    create(user: User): Promise<ApiResponse>;
    update(id: string, updateUser: User): Promise<User>;
    remove(id: string): Promise<void>;
}
