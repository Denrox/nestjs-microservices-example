import { IUser } from './user.interface.js';

export interface IServiceUserGetByIdResponse {
  status: number;
  message: string;
  user: IUser | null;
}
