import { ApiProperty } from '@nestjs/swagger';

export class ConfirmUserDto {
  @ApiProperty()
  link: string;
}
