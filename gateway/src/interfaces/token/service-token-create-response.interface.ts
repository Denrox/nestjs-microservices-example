export interface IServiveTokenCreateResponse {
  status: number;
  token: string | null;
  message: string;
  errors: { [key: string]: any };
}
