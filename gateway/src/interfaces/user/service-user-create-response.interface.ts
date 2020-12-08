import { IUser } from './user.interface';

export interface IServiceUserCreateResponse {
  status: number;
  message: string;
  user: IUser | null;
  errors: { [key: string]: any };
}
