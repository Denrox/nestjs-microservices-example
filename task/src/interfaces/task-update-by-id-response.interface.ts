import { ITask } from './task.interface.js';

export interface ITaskUpdateByIdResponse {
  status: number;
  message: string;
  task: ITask | null;
  errors: { [key: string]: any } | null;
}
