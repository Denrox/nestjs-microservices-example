import { ITask } from './task.interface';

export interface IServiceTaskSearchByUserIdResponse {
  status: number;
  message: string;
  tasks: ITask[];
}
