import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiModelProperty({
    uniqueItems: true,
    example: 'test1@denrox.com'
  })
  email: string;
  @ApiModelProperty({
    minLength: 6,
    example: 'test11'
  })
  password: string;
};
