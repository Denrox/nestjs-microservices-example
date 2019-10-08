import { ApiModelProperty } from '@nestjs/swagger';

export class LoginUserResponseDto {
  @ApiModelProperty({example: 'token_create_success'})
  message: string;
  @ApiModelProperty({
    example: {token: 'someEncodedToken'}
  })
  data: {
    token: string;
  } | null;
  @ApiModelProperty({example: null})
  errors: {[key: string]: any} | null;
}
