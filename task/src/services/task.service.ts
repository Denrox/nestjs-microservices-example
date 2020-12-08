import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ITask } from '../interfaces/task.interface';
import { ITaskUpdateParams } from '../interfaces/task-update-params.interface';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<ITask>) {}

  public async getTasksByUserId(userId: string): Promise<ITask[]> {
    return this.taskModel.find({ user_id: userId }).exec();
  }

  public async createTask(taskBody: ITask): Promise<ITask> {
    const taskModel = new this.taskModel(taskBody);
    return await taskModel.save();
  }

  public async findTaskById(id: string) {
    return await this.taskModel.findById(id);
  }

  public async removeTaskById(id: string) {
    return await this.taskModel.findOneAndDelete({ _id: id });
  }

  public async updateTaskById(
    id: string,
    params: ITaskUpdateParams,
  ): Promise<ITask> {
    return await this.taskModel.updateOne({ _id: id }, params);
  }
}
