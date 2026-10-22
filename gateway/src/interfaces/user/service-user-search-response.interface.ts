import { IUser } from './user.interface.js';

export interface IServiceUserSearchResponse {
  status: number;
  message: string;
  user: IUser | null;
}
