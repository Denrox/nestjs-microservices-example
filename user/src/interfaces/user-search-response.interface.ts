import { IUser } from './user.interface';

export interface IUserSearchResponse {
  status: number;
  message: string;
  user: IUser | null;
}
