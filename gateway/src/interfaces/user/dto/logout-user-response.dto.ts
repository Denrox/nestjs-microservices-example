import { ApiModelProperty } from '@nestjs/swagger';

export class LogoutUserResponseDto {
  @ApiModelProperty({example: 'token_destroy_success'})
  message: string;
  @ApiModelProperty({example: null})
  data: null;
  @ApiModelProperty({example: null})
  errors: {[key: string]: any} | null;
}
