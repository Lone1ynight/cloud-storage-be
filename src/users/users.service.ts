import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity.js';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  async create(dto: CreateUserDto) {
    const { password, ...userData } = dto;

    const existingUser = await this.repository.findOneBy({
      email: userData.email,
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists.');
    }

    const hashedPassword: string = await bcrypt.hash(password, 10);

    const newUser = await this.repository.save({
      ...userData,
      password: hashedPassword,
    });

    return newUser;
  }

  findByEmail(email: string) {
    return this.repository.findOneBy({ email });
  }

  findById(id: number) {
    return this.repository.findOneBy({ id });
  }
}
