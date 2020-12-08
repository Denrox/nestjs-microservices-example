export interface IServiceTaskDeleteResponse {
  status: number;
  message: string;
  errors: { [key: string]: any };
}
