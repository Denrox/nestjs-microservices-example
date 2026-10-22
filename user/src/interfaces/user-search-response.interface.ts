import { IUser } from './user.interface.js';

export interface IUserSearchResponse {
  status: number;
  message: string;
  user: IUser | null;
}
