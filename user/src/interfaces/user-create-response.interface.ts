import { IUser } from './user.interface.js';

export interface IUserCreateResponse {
  status: number;
  message: string;
  user: IUser | null;
  errors: { [key: string]: any } | null;
}
