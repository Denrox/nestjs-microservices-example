import { ITask } from './task.interface';

export interface IServiceTaskCreateResponse {
  status: number;
  message: string;
  task: ITask | null;
  errors: { [key: string]: any };
}
