import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiModelProperty({required: false, example: 'test task'})
  name: string;
  @ApiModelProperty({required: false, example: 'test task description'})
  description: string;
  @ApiModelProperty({required: false, example: +new Date()})
  start_time: number;
  @ApiModelProperty({required: false, example: 90000})
  duration: number;
  @ApiModelProperty({required: false, example: true})
  is_solved: boolean;
}
