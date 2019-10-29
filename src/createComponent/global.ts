/* eslint-disable @typescript-eslint/no-namespace */
export {};

declare global {
  namespace NodeJS {
    export interface Global {
      createComponent({ ...args }: Partial<ComponentProps>): string;
      helpers: object;
      window: object;
      document: object;
    }
  }
  function createComponent ({ ...args }: Partial<ComponentProps>): string;
}
