import { SetMetadata } from '@nestjs/common';

export const Permission = (permission: string) =>
  SetMetadata('permission', permission);
