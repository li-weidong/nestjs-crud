import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(user: User): Promise<User>;
    update(id: number, updateUser: User): Promise<User>;
    remove(id: number): Promise<void>;
}
