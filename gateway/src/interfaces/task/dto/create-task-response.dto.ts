import { ApiModelProperty } from '@nestjs/swagger';
import { ITask } from '../task.interface';

export class CreateTaskResponseDto {
  @ApiModelProperty({example: 'task_create_success'})
  message: string;
  @ApiModelProperty({
    example: {
      task: {
        notification_id: null,
        name: 'test task',
        description: 'test task description',
        start_time: +new Date(),
        duration: 90000,
        user_id: '5d987c3bfb881ec86b476bca',
        is_solved: false,
        created_at: +new Date(),
        updated_at: +new Date(),
        id: '5d987c3bfb881ec86b476bcc'
      }
    }
  })
  data: {
    task: ITask;
  } | null;
  @ApiModelProperty({example: null})
  errors: {[key: string]: any} | null;
}
