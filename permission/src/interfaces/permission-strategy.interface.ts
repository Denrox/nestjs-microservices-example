import { IUser } from './user.interface';

export interface IPermissionStrategy {
  getAllowedPermissions: (user: IUser, permissions: string[]) => string[];
}
