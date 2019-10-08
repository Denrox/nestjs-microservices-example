import { ApiModelProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiModelProperty({example: 'test1@denrox.com'})
  email: string;
  @ApiModelProperty({example: 'test11'})
  password: string;
}
