import { ApiProperty } from '@nestjs/swagger';

export class TaskIdDto {
  @ApiProperty()
  id: string;
}
