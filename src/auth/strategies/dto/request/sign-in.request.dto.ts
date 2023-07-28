import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignInRequestDto {
  @IsEmail()
  @ApiProperty({ example: 'test@test.com' })
  email: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'test_password' })
  password: string;
}
