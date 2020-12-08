import { ApiProperty } from '@nestjs/swagger';
import { ITask } from '../task.interface';

export class UpdateTaskResponseDto {
  @ApiProperty({ example: 'task_update_by_id_success' })
  message: string;
  @ApiProperty({
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
        id: '5d987c3bfb881ec86b476bcc',
      },
    },
    nullable: true,
  })
  data: {
    task: ITask;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
