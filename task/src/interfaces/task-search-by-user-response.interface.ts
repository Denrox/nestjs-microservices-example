import { ITask } from './task.interface';

export interface ITaskSearchByUserResponse {
  status: number;
  message: string;
  tasks: ITask[];
}
