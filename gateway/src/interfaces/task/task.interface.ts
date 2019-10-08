export interface ITask {
  name: string;
  description: string;
  start_time: number;
  duration: number;
  is_solved: boolean;
  notification_id: number;
}
