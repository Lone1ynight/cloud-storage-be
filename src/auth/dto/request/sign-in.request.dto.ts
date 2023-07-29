import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginRequestDto {
  @IsEmail()
  @ApiProperty({ example: 'asd@gmail.com' })
  email: string;

  @IsNotEmpty()
  @ApiProperty({ example: '1111' })
  password: string;
}
