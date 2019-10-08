import { ApiModelProperty } from '@nestjs/swagger';
import { IUser } from '../user.interface';

export class CreateUserResponseDto {
  @ApiModelProperty({example: 'user_create_success'})
  message: string;
  @ApiModelProperty({
    example: {
      user: {
        email: 'test@denrox.com',
        is_confirmed: false,
        id: '5d987c3bfb881ec86b476bcc'
      }
    }
  })
  data: {
    user: IUser,
    token: string
  } | null;
  @ApiModelProperty({example: null})
  errors: {[key: string]: any} | null;
}
