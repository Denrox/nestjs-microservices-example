import { ApiModelProperty } from '@nestjs/swagger';

export class ConfirmUserDto {
  @ApiModelProperty()
  link: string
}
