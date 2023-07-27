import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    default: 'asd@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    default: 'asd qwe',
  })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    default: '1111',
  })
  @IsNotEmpty()
  password: string;
}
