import { ITask } from './task.interface.js';

export interface IServiceTaskSearchByUserIdResponse {
  status: number;
  message: string;
  tasks: ITask[];
}
