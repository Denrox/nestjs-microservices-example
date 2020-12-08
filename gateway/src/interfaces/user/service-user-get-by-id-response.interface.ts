import { IUser } from './user.interface';

export interface IServiceUserGetByIdResponse {
  status: number;
  message: string;
  user: IUser | null;
}
