import { ITask } from './task.interface';

export interface IServiceTaskUpdateByIdResponse {
  status: number;
  message: string;
  task: ITask | null;
  errors: { [key: string]: any };
}
