import { ApiModelProperty } from '@nestjs/swagger';

export class DeleteTaskResponseDto {
  @ApiModelProperty({example: 'task_delete_by_id_success'})
  message: string;
  @ApiModelProperty({example: null})
  data: null;
  @ApiModelProperty({example: null})
  errors: {[key: string]: any} | null;
}
