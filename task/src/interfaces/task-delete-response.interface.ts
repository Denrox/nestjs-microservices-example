export interface ITaskDeleteResponse {
  status: number;
  message: string;
  errors: { [key: string]: any } | null;
}
