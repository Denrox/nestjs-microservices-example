import { ApiModelProperty } from '@nestjs/swagger';
import { IUser } from '../user.interface';

export class GetUserByTokenResponseDto {
  @ApiModelProperty({example: 'user_get_by_id_success'})
  message: string;
  @ApiModelProperty({
    example: {
      user: {
        email: 'test@denrox.com',
        is_confirmed: true,
        id: '5d987c3bfb881ec86b476bcc'
      }
    }
  })
  data: {
    user: IUser,
  } | null;
  @ApiModelProperty({example: null})
  errors: {[key: string]: any} | null;
}
