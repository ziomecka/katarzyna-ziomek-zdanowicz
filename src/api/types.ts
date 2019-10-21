export type Query = Record<string, string | number>;

export type ApiResponse = {
  result: boolean;
  err?: Error;
};
