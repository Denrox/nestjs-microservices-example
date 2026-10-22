import { ITask } from './task.interface.js';

export interface ITaskSearchByUserResponse {
  status: number;
  message: string;
  tasks: ITask[];
}
