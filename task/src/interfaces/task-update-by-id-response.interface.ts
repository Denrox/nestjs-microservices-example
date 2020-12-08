import { ITask } from './task.interface';

export interface ITaskUpdateByIdResponse {
  status: number;
  message: string;
  task: ITask | null;
  errors: { [key: string]: any } | null;
}
