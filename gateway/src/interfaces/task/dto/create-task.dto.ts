import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'test task' })
  name: string;
  @ApiProperty({ example: 'test task description' })
  description: string;
  @ApiProperty({ example: +new Date() })
  start_time: number;
  @ApiProperty({ example: 90000 })
  duration: number;
}
