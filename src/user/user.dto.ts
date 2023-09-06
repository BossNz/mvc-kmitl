import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MaxLength } from 'class-validator';

export class UserDto {
  @ApiProperty()
  @MaxLength(100)
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;
}
