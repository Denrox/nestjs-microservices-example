import { IUser } from './user.interface.js';

export interface IPermissionStrategy {
  getAllowedPermissions: (user: IUser, permissions: string[]) => string[];
}
