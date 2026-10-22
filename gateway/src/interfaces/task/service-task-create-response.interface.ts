import { ITask } from './task.interface.js';

export interface IServiceTaskCreateResponse {
  status: number;
  message: string;
  task: ITask | null;
  errors: { [key: string]: any };
}
