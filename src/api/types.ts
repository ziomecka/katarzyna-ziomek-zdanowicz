export type Query = { [key: string]: string | number };

export type ApiResponse = {
  result: boolean;
  err?: Error;
};
