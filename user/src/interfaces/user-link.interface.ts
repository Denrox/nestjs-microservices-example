import { Document } from 'mongoose';

export interface IUserLink extends Document {
  id?: string;
  user_id: string;
  link: string;
  is_used: boolean;
}
