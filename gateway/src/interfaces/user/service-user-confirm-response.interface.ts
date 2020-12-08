export interface IServiceUserConfirmResponse {
  status: number;
  message: string;
  errors: { [key: string]: any };
}
