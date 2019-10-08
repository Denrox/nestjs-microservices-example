import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiModelProperty({example: 'test task'})
  name: string;
  @ApiModelProperty({example: 'test task description'})
  description: string;
  @ApiModelProperty({example: +new Date()})
  start_time: number;
  @ApiModelProperty({example: 90000})
  duration: number;
}
