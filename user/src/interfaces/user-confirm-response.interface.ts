export interface IUserConfirmResponse {
  status: number;
  message: string;
  errors: { [key: string]: any } | null;
}
