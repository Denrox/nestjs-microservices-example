import { ApiModelProperty } from '@nestjs/swagger';

export class ConfirmUserResponseDto {
  @ApiModelProperty({example: 'user_confirm_success'})
  message: string;
  @ApiModelProperty({example: null})
  data: null;
  @ApiModelProperty({example: null})
  errors: {[key: string]: any} | null;
}
