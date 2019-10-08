import { IUser } from '../user/user.interface';

export interface IAuthorizedRequest extends Request {
  user?: IUser;
}
