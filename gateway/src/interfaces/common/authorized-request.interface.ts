import { IUser } from '../user/user.interface.js';

export interface IAuthorizedRequest extends Request {
  user?: IUser;
}
